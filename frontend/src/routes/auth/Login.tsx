import { EmailForm } from "./widgets/EmailForm";

export function Login() {
  return (
    // container
    <div className="hero min-h-full bg-base-200">
      <div className="hero-content w-4/5 flex-col lg:flex-row">
        {/* left */}
        <div className=" text-center lg:text-right">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        {/* right */}
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <EmailForm />
        </div>
      </div>
    </div>
  );
}
