import React from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";


export async function loader({ params }) {
  const response = await fetch(`http://localhost:3000/data/${params.id}`, {
    method: "DELETE",
  });
  return redirect("/");
}

export async function action({ params }) {
  return redirect("/");
}
export const Delete = () => {
  return (
    <Form
      method="post"
      className="border-gray-800 px-5 py-5 mt-10 w-full h-[25rem] text-yellow-200"
    >
    </Form>
  );
};
