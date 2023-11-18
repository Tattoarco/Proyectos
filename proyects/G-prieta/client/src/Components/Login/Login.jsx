import "./Login.css";
import { Link } from "react-router-dom";
import { Nav } from "../Navbar/Navbar";
import { Input, Button } from "@nextui-org/react";

const Login = () => {
  return (
    <main className="h-screen overflow-auto">
      <header>
        <div className="min-h-[10vh]">
          <Nav />
        </div>
      </header>
      <section className="w-full h-[90vh] flex justify-center items-center">
        <section className="w-[70%] h-[80vh] flex">
          <div className="w-full flex lg:w-1/2 max-lg:rounded-xl bg-white rounded-l-3xl shadow-lg justify-center items-center">
            <form>
              <section className="flex flex-col gap-4">
                <header className="mb-4">
                  <h2 className="font-bold text-3xl">Iniciar Sesión</h2>
                  <p>¡Gracias por volver!</p>
                </header>
                <section className="flex flex-col gap-8">
                  <Input type="text" variant="bordered" radius="sm" label="Correo" labelPlacement="outside" />
                  <Input type="text" variant="bordered" radius="sm" label="Contraseña" labelPlacement="outside" />
                </section>
                <section className="flex text-xs gap-4 justify-center mt-4">
                  <label htmlFor="">
                    <input type="checkbox" name="" id="" />
                    Aceptar términos y condiciones
                  </label>
                  <p className="text-[#BF932A] ">Olvidé mi contraseña</p>
                </section>
                <section className="flex items-center text-sm gap-2 justify-center">
                  <p className="underline underline-offset-6">¿No tienes cuenta?</p>
                  <Link to="/register">
                    <Button variant="light" size="md" className="text-[#BF932A]">
                      Registrarse
                    </Button>
                  </Link>
                </section>
              </section>
            </form>
          </div>

          <div className="h-full w-1/2 relative hidden lg:flex items-center justify-center bg-gray-300 rounded-r-3xl shadow-lg">
            <img src="./telaForm.jpeg" alt="African" className="w-60 h-60 rounded-full " />
            <div className="w-full h-1/2 bottom-0 absolute bg-white/10 backdrop-blur-lg rounded-r-3xl" />
          </div>
        </section>
      </section>
    </main>
  );
};

export { Login };
