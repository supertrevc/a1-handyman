"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, AlertCircle, Phone } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";

const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Please enter a valid 10-digit phone number."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .or(z.literal("").transform(() => undefined))
    .optional(),
  service: z.string().min(1, "Please choose the service you need."),
  description: z
    .string()
    .trim()
    .min(10, "A few details help us give a better estimate.")
    .max(2000, "Please keep it under 2,000 characters."),
  honey: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const serviceId = useId();
  const descId = useId();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      description: "",
      honey: "",
    },
  });

  async function onSubmit(values: FormValues) {
    if (values.honey) return;
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-line bg-white p-8 shadow-sm"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber/20 text-red">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold text-ink">
          Thanks — we&apos;ll be in touch within one business day.
        </h2>
        <p className="mt-3 text-body">
          For urgent jobs, call{" "}
          <a className="font-semibold text-red underline" href={SITE.phoneHref}>
            {SITE.phone}
          </a>{" "}
          and you&apos;ll usually reach Justin directly. {SITE.hoursHuman}.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-red transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 rounded"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldBase =
    "block w-full rounded-lg border bg-white px-4 py-3 text-base text-ink shadow-sm placeholder:text-muted/70 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2";

  const fieldOk = "border-line hover:border-navy/40 focus:border-navy";
  const fieldBad = "border-red focus:border-red";

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-line bg-white p-7 md:p-9 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={nameId} className="block text-sm font-semibold text-ink">
            Full name <span aria-hidden className="text-red">*</span>
          </label>
          <input
            id={nameId}
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${nameId}-err` : undefined}
            className={`${fieldBase} mt-1.5 ${errors.name ? fieldBad : fieldOk}`}
            {...register("name")}
          />
          {errors.name ? (
            <p id={`${nameId}-err`} className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-red">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={phoneId} className="block text-sm font-semibold text-ink">
            Phone <span aria-hidden className="text-red">*</span>
          </label>
          <input
            id={phoneId}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(918) 555-1234"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${phoneId}-err` : undefined}
            className={`${fieldBase} mt-1.5 ${errors.phone ? fieldBad : fieldOk}`}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id={`${phoneId}-err`} className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-red">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              {errors.phone.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={emailId} className="block text-sm font-semibold text-ink">
          Email <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id={emailId}
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? `${emailId}-err` : undefined}
          className={`${fieldBase} mt-1.5 ${errors.email ? fieldBad : fieldOk}`}
          {...register("email")}
        />
        {errors.email ? (
          <p id={`${emailId}-err`} className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-red">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div className="mt-5">
        <label htmlFor={serviceId} className="block text-sm font-semibold text-ink">
          Service needed <span aria-hidden className="text-red">*</span>
        </label>
        <select
          id={serviceId}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? `${serviceId}-err` : undefined}
          className={`${fieldBase} mt-1.5 ${errors.service ? fieldBad : fieldOk}`}
          defaultValue=""
          {...register("service")}
        >
          <option value="" disabled>
            Choose a category…
          </option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other / Not Sure">Other / Not sure — let&apos;s talk</option>
        </select>
        {errors.service ? (
          <p id={`${serviceId}-err`} className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-red">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.service.message}
          </p>
        ) : null}
      </div>

      <div className="mt-5">
        <label htmlFor={descId} className="block text-sm font-semibold text-ink">
          What&apos;s going on? <span aria-hidden className="text-red">*</span>
        </label>
        <textarea
          id={descId}
          rows={5}
          placeholder="A few sentences about the project. Address or neighborhood helps too."
          aria-invalid={!!errors.description}
          aria-describedby={errors.description ? `${descId}-err` : `${descId}-hint`}
          className={`${fieldBase} mt-1.5 resize-y ${errors.description ? fieldBad : fieldOk}`}
          {...register("description")}
        />
        {errors.description ? (
          <p id={`${descId}-err`} className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-red">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.description.message}
          </p>
        ) : (
          <p id={`${descId}-hint`} className="mt-1.5 text-sm text-muted">
            The more we know, the faster we can quote it.
          </p>
        )}
      </div>

      {/* Honeypot for bots — visually hidden, not for screen reader announce */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" tabIndex={-1} autoComplete="off" {...register("honey")} />
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-red px-6 py-3.5 text-base font-bold text-white shadow-md hover:bg-red-700 transition-all disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>Send Request</>
          )}
        </button>
        <p className="text-sm text-muted">
          Prefer to talk?{" "}
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-1.5 font-semibold text-navy hover:text-red transition"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.phone}
          </a>
        </p>
      </div>
    </form>
  );
}
