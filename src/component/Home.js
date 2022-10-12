import React from "react";

export default function Home() {
  return (
    <div className="Main">
      <header>
        <h2 class="title">Prescription management</h2>
      </header>
      <section class="texto">
        <h3 class="title-section">Prescription</h3>
        <p class="about">
          <div style={{ textAlign: "right" }}>
            <h7>
              <b>Upload image via</b>
            </h7>
            &nbsp;
            <a
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "green",
              }}
              href="https://api.whatsapp.com/send/?phone=%2B94772940951&text&app_absent=0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>{" "}
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B94772940951&text&app_absent=0"></a>
          </div>
        </p>

        <div className="container mt-5">
          <h1 className="mt-5 text-center">
            Prescription management user interface for online orders
          </h1>

          <div
            style={{ alignItems: "center", margin: "60px" }}
            id="carouselExampleControlsNoTouching"
            class="carousel slide"
            data-bs-touch="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://i.postimg.cc/7Yd6vBHj/www-wethara-com.png"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  src="https://i.postimg.cc/4yMJgdgp/www-wethara-com-1.png"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  src="https://i.postimg.cc/4yMJgdgp/www-wethara-com-1.png"
                  class="d-block w-100"
                  alt="..."
                ></img>
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "green",
              }}
              href="/addstud"
            >
              <b>Get start</b>

              <img src="data:image/png;base64,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"></img>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B94772940951&text&app_absent=0"></a>
          </div>

          <br></br>

          <br></br>
          <br></br>
          <br></br>
        </div>
      </section>
      <section class="imagen imagen1">
        <h2 class="title">Diseño</h2>
      </section>
      <section class="texto">
        <h3 class="title-section">Diseño</h3>
        <p class="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          impedit numquam optio ea facilis magnam perspiciatis eius quam, neque
          blanditiis maxime eligendi aspernatur? Incidunt reiciendis quisquam
          nobis qui, exercitationem eaque. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Deleniti consequatur aut alias
          recusandae adipisci perferendis assumenda natus inventore, delectus
          quia! Dolorum sapiente voluptatibus cupiditate, suscipit deleniti
          illum eius magni ex? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit impedit numquam optio ea facilis
          magnam perspiciatis eius quam, neque blanditiis maxime eligendi
          aspernatur? Incidunt reiciendis quisquam nobis qui, exercitationem
          eaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Deleniti consequatur aut alias recusandae adipisci perferendis
          assumenda natus inventore, delectus quia! Dolorum sapiente
          voluptatibus cupiditate, suscipit deleniti illum eius magni ex? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          impedit numquam optio ea facilis magnam perspiciatis eius quam, neque
          blanditiis maxime eligendi aspernatur? Incidunt reiciendis quisquam
          nobis qui, exercitationem eaque. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Deleniti consequatur aut alias
          recusandae adipisci perferendis assumenda natus inventore, delectus
          quia! Dolorum sapiente voluptatibus cupiditate, suscipit deleniti
          illum eius magni ex? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit impedit numquam optio ea facilis
          magnam perspiciatis eius quam, neque blanditiis maxime eligendi
          aspernatur? Incidunt reiciendis quisquam nobis qui, exercitationem
          eaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Deleniti consequatur aut alias recusandae adipisci perferendis
          assumenda natus inventore, delectus quia! Dolorum sapiente
          voluptatibus cupiditate, suscipit deleniti illum eius magni ex?
        </p>
      </section>
      <section class="imagen imagen2">
        <h2 class="title">Estilo</h2>
        <p class="about">
          <h1>About</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          impedit numquam optio ea facilis magnam perspiciatis eius quam, neque
          blanditiis maxime eligendi aspernatur? Incidunt reiciendis quisquam
          nobis qui, exercitationem eaque. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Deleniti consequatur aut alias
          recusandae adipisci perferendis assumenda natus inventore, delectus
          quia! Dolorum sapiente voluptatibus cupiditate, suscipit deleniti
          illum eius magni ex? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit impedit numquam optio ea facilis
          magnam perspiciatis eius quam, neque blanditiis maxime eligendi
          aspernatur? Incidunt reiciendis quisquam nobis qui, exercitationem
          eaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Deleniti consequatur aut alias recusandae adipisci perferendis
          assumenda natus inventore, delectus quia! Dolorum sapiente
          voluptatibus cupiditate, suscipit deleniti illum eius magni ex? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          impedit numquam optio ea facilis magnam perspiciatis eius quam, neque
          blanditiis maxime eligendi aspernatur? Incidunt reiciendis quisquam
          nobis qui, exercitationem eaque. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Deleniti consequatur aut alias
          recusandae adipisci perferendis assumenda natus inventore, delectus
          quia! Dolorum sapiente voluptatibus cupiditate, suscipit deleniti
          illum eius magni ex? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit impedit numquam optio ea facilis
          magnam perspiciatis eius quam, neque blanditiis maxime eligendi
          aspernatur? Incidunt reiciendis quisquam nobis qui, exercitationem
          eaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Deleniti consequatur aut alias recusandae adipisci perferendis
          assumenda natus inventore, delectus quia! Dolorum sapiente
          voluptatibus cupiditate, suscipit deleniti illum eius magni ex?
        </p>
      </section>
    </div>
  );
}
