import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

// Initialisiere EmailJS direkt mit deinem Public Key
emailjs.init('xif8fcq67foO9rUd4');  // Stelle sicher, dass dies dein korrekter Public Key ist

function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data, e) => {
    // Ersetze 'service_6aw5w8n' und 'template_y93odsb' mit deinen tatsächlichen EmailJS Service und Template IDs
    emailjs.sendForm('service_6aw5w8n', 'template_y93odsb', e.target)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          alert("E-Mail wurde erfolgreich gesendet!");
          reset(); // Setzt das Formular nach dem Senden zurück, um erneutes Senden zu vermeiden
      }, (error) => {
          console.log('FAILED...', error);
          alert("Fehler beim Senden der E-Mail.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} id="event-form">
        <div>
          <label>Vorname:</label>
          <input
            type="text"
            {...register("vorname", { required: "Vorname ist erforderlich" })}
          />
          {errors.vorname && <span>{errors.vorname.message}</span>}
        </div>
        <div>
          <label>Nachname:</label>
          <input
            type="text"
            {...register("nachname", { required: "Nachname ist erforderlich" })}
          />
          {errors.nachname && <span>{errors.nachname.message}</span>}
        </div>
        <div>
          <label>Anzahl der Personen:</label>
          <select {...register("anzahlPersonen", { required: "Bitte wähle die Anzahl der Personen" })}>
            <option value="">Wählen...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="mehr">Mehr als 5</option>
          </select>
          {errors.anzahlPersonen && <span>{errors.anzahlPersonen.message}</span>}
        </div>
        <button type="submit">Senden</button>
      </form>
    </div>
  );
}

export default Form;
