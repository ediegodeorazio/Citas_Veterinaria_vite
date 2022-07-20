const Paciente = () => {
  return (
    <div className="mx-5  my-10 first-letter:ml-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Diego</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">diego@diego.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">10 Diciembre 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          harum dolorem quas accusamus repellendus ratione dolores obcaecati
          dicta nesciunt culpa animi fugiat ducimus voluptas magni maxime
          asperiores sunt, quasi cum?{" "}
        </span>
      </p>
    </div>
  );
};

export default Paciente;
