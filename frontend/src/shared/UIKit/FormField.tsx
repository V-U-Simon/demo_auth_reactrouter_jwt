import React from "react";

export function FormField({ label, type, name, placeholder }) {
  return (
    <div className="wb">
      <label className="rc kk wm vb" htmlFor={name}>
        {label}
      </label>
      <input type={type} name={name} id={name} placeholder={placeholder} className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40" />
    </div>
  );
}
