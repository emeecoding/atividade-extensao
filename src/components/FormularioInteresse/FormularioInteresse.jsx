import React, { useState } from "react";
import styles from "../../components/FormularioInteresse/FormularioInteresse.module.scss";

const FormularioInteresse = () => {
  const [formData, setFormData] = useState({
    nome: "",
    escola: "",
    interesse: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Obrigado por enviar seu interesse!");
    setFormData({ nome: "", escola: "", interesse: "" });
  };

  return (
    <section className={styles["formulario-interesse"]}>
      <h2> Formulário de Interesse</h2>
      <p>
        Preencha seus dados para participar da nossa plataforma educacional
        gratuita.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="escola"
          placeholder="Nome da escola"
          value={formData.escola}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="interesse"
          placeholder="Área de interesse (ex: tecnologia, design...)"
          value={formData.interesse}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default FormularioInteresse;
