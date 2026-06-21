"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nom: yup
    .string()
    .required("Nom obligatoire")
    .min(5, "Minimum 5 caractères"),

  cin: yup
    .string()
    .required("CIN obligatoire")
    .matches(/^\d{8}$/, "Le CIN doit contenir 8 chiffres"),

  email: yup
    .string()
    .email("Email invalide")
    .required("Email obligatoire"),

  password: yup
    .string()
    .required("Mot de passe obligatoire")
    .min(6, "Minimum 6 caractères"),

  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Les mots de passe ne correspondent pas"
    )
    .required("Confirmation obligatoire"),

  conditions: yup
    .boolean()
    .oneOf([true], "Vous devez accepter les conditions"),
});

export default function InscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Inscription réussie !");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input type="text" placeholder="Nom" {...register("nom")} />
      <p className="error">{errors.nom?.message}</p>

      <input type="text" placeholder="CIN" {...register("cin")} />
      <p className="error">{errors.cin?.message}</p>

      <input type="email" placeholder="Email" {...register("email")} />
      <p className="error">{errors.email?.message}</p>

      <input
        type="password"
        placeholder="Mot de passe"
        {...register("password")}
      />
      <p className="error">{errors.password?.message}</p>

      <input
        type="password"
        placeholder="Confirmation mot de passe"
        {...register("confirmPassword")}
      />
      <p className="error">{errors.confirmPassword?.message}</p>

      <label>
        <input type="checkbox" {...register("conditions")} />
        J'accepte les conditions d'utilisation
      </label>

      <p className="error">{errors.conditions?.message}</p>

      <button type="submit">S'inscrire</button>
    </form>
  );
}