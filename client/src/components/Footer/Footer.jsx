import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" overflow-hidden bg-gray-100 text-center text-gray-600 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6
              className="
            mb-4
            flex
            items-center
            justify-center
            font-semibold
            uppercase
            md:justify-start
          "
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="cubes"
                className="mr-3 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                ></path>
              </svg>
              PET FRIENDLY
            </h6>
            <p>
              Somos un grupo de 8 estudiantes de Henry apasionados por la
              programacion. ¡Estamos muy felices de su visita,esperamos que
              disfrutes la experiencia en nuestra web!.
            </p>
          </div>

          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              SERVICIOS
            </h6>
            <p className="mb-4">
              <a href="/services" className="text-gray-600">
                Guarderia
              </a>
            </p>
            <p className="mb-4">
              <a href="/services" className="text-gray-600">
                Paseador
              </a>
            </p>
            <p>
              <a href="/adopciones/blog" className="text-gray-600">
                Adopciones
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              CONTACTO
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="home"
                className="mr-4 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                ></path>
              </svg>
              General Paz 1932,X5000,Córdoba,Argentina
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                className="mr-4 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
              Petfriendlyuniverse@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                className="mr-4 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                ></path>
              </svg>
              5493513845741
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="print"
                className="mr-4 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M 380.9 97.1 C 339 55.1 283.2 32 223.9 32 c -122.4 0 -222 99.6 -222 222 c 0 39.1 10.2 77.3 29.6 111 L 0 480 l 117.7 -30.9 c 32.4 17.7 68.9 27 106.1 27 h 0.1 c 122.3 0 224.1 -99.6 224.1 -222 c 0 -59.3 -25.2 -115 -67.1 -157 Z m -157 341.6 c -33.2 0 -65.7 -8.9 -94 -25.7 l -6.7 -4 l -69.8 18.3 L 72 359.2 l -4.4 -7 c -18.5 -29.4 -28.2 -63.3 -28.2 -98.2 c 0 -101.7 82.8 -184.5 184.6 -184.5 c 49.3 0 95.6 19.2 130.4 54.1 c 34.8 34.9 56.2 81.2 56.1 130.5 c 0 101.8 -84.9 184.6 -186.6 184.6 Z m 101.2 -138.2 c -5.5 -2.8 -32.8 -16.2 -37.9 -18 c -5.1 -1.9 -8.8 -2.8 -12.5 2.8 c -3.7 5.6 -14.3 18 -17.6 21.8 c -3.2 3.7 -6.5 4.2 -12 1.4 c -32.6 -16.3 -54 -29.1 -75.5 -66 c -5.7 -9.8 5.7 -9.1 16.3 -30.3 c 1.8 -3.7 0.9 -6.9 -0.5 -9.7 c -1.4 -2.8 -12.5 -30.1 -17.1 -41.2 c -4.5 -10.8 -9.1 -9.3 -12.5 -9.5 c -3.2 -0.2 -6.9 -0.2 -10.6 -0.2 c -3.7 0 -9.7 1.4 -14.8 6.9 c -5.1 5.6 -19.4 19 -19.4 46.3 c 0 27.3 19.9 53.7 22.6 57.4 c 2.8 3.7 39.1 59.7 94.8 83.8 c 35.2 15.2 49 16.5 66.6 13.9 c 10.7 -1.6 32.8 -13.4 37.4 -26.4 c 4.6 -13 4.6 -24.1 3.2 -26.4 c -1.3 -2.5 -5 -3.9 -10.5 -6.6 z"
                ></path>
              </svg>
              5493513845741(Solo Via Whatsapp)
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-6 text-center">
        <span> © 2023 PetFriendlyUniverse - Todos los derechos reservados</span>
        <a
          className="font-semibold text-gray-600"
          href="https://tailwind-elements.com/"
        ></a>
      </div>
    </footer>
  );
}

export default Footer;
