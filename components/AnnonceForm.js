"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nom: yup
    .string()
    .required("Le nom est obligatoire")
    .min(4, "Minimum 4 caractères"),

  image: yup
    .string()
    .required("Image obligatoire"),

  prix: yup
    .string()
    .required("Prix obligatoire")
    .matches(/^\d+$/, "Le prix doit être numérique"),

  description: yup
    .string()
    .required("Description obligatoire")
    .max(100, "Maximum 100 caractères"),

  categorie: yup
    .string()
    .required("Catégorie obligatoire"),
});

export default function AnnonceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Annonce publiée !");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input
        type="text"
        placeholder="Nom de l'annonce"
        {...register("nom")}
      />
      <p className="error">{errors.nom?.message}</p>

      <input
        type="text"
        placeholder="URL de l'image"
        {...register("image")}
      />
      <p className="error">{errors.image?.message}</p>

      <input type="text" placeholder="Prix" {...register("prix")} />
      <p className="error">{errors.prix?.message}</p>

      <textarea
        placeholder="Description"
        {...register("description")}
      ></textarea>
      <p className="error">{errors.description?.message}</p>

      <select {...register("categorie")}>
        <option value="">Choisir une catégorie</option>
        <option value="voiture">Voiture</option>
        <option value="immobilier">Immobilier</option>
        <option value="informatique">Informatique</option>
        <option value="emploi">Emploi</option>
      </select>

      <p className="error">{errors.categorie?.message}</p>

      <button type="submit">Publier</button>
    </form>
  );
}