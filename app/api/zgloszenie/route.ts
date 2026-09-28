import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

type Payload = {
  intent?: string;
  name?: string;
  phone?: string;
  email?: string;
  facility?: string;
  childYear?: string;
  start?: string;
  message?: string;
  consent?: string | boolean;
  firma?: string;
};

function phoneOk(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("48")) return digits.slice(2);
  if (digits.length === 9) return digits;
  return null;
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Nieczytelne zgłoszenie." }, { status: 400 });
  }

  if (body.firma) return NextResponse.json({ ok: true });

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = phoneOk(body.phone || "");
  const message = (body.message || "").trim();
  const consent = body.consent === true || body.consent === "on";

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json({ ok: false, error: "Podaj imię i nazwisko." }, { status: 400 });
  }
  if (!phone) {
    return NextResponse.json({ ok: false, error: "Podaj poprawny numer telefonu." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Podaj poprawny adres e-mail." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ ok: false, error: "Zaznacz zgodę na kontakt." }, { status: 400 });
  }
  if (body.intent === "kontakt" && message.length < 5) {
    return NextResponse.json({ ok: false, error: "Napisz krótką wiadomość." }, { status: 400 });
  }
  if (message.length > 2000) {
    return NextResponse.json({ ok: false, error: "Wiadomość jest za długa." }, { status: 400 });
  }

  const entry = {
    at: new Date().toISOString(),
    intent: body.intent === "rekrutacja" ? "rekrutacja" : "kontakt",
    name,
    phone,
    email,
    facility: body.facility || "",
    childYear: body.childYear || "",
    start: body.start || "",
    message,
  };

  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "zgloszenia.json");
  await mkdir(dir, { recursive: true });
  let current: unknown[] = [];
  try {
    current = JSON.parse(await readFile(file, "utf8")) as unknown[];
    if (!Array.isArray(current)) current = [];
  } catch {
    current = [];
  }
  current.push(entry);
  await writeFile(file, JSON.stringify(current, null, 2));

  return NextResponse.json({ ok: true });
}
