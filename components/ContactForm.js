"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .required("Le nom est obligatoire")
    .min(4, "Le nom doit contenir au moins 4 caractères"),

  email: yup
    .string()
    .email("Email invalide")
    .required("Email obligatoire"),

  telephone: yup
    .string()
    .required("Numéro de téléphone obligatoire")
    .matches(/^\d{8}$/, "Le numéro doit contenir exactement 8 chiffres"),

  message: yup
    .string()
    .required("Message est obligatoire")
    .max(30, "Maximum 30 caractères"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Message envoyé !");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input type="text" placeholder="Nom" {...register("name")} />
      <p className="error">{errors.name?.message}</p>

      <input type="email" placeholder="Email" {...register("email")} />
      <p className="error">{errors.email?.message}</p>

      <input
        type="text"
        placeholder="Téléphone"
        {...register("telephone")}
      />
      <p className="error">{errors.telephone?.message}</p>

      <textarea
        placeholder="Votre message"
        {...register("message")}
      ></textarea>
      <p className="error">{errors.message?.message}</p>

      <button type="submit">Envoyer</button>
    </form>
  );
}