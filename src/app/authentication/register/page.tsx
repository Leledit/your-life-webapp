/* eslint-disable @next/next/no-img-element */
"use client";
import FormInput from "@/app/_components/form/input";
import { useState } from "react";
import { ImensagemRequest } from "@/app/_interface/forms";
import { handleChancheField } from "@/app/_utils/formHandling";
import { useRouter } from "next/navigation";
import { IAuthenticationRegister } from "@/app/_interface/authentication";
import FormLink from "@/app/_components/form/link";
import FormLoading from "@/app/_components/form/loading";
import FormMessage from "@/app/_components/form/message";
import Button from "@/app/_components/form/button";
import AuthenticationContainer from "@/app/_components/authentication/container";
import AuthenticationHeader from "@/app/_components/authentication/header";
import AuthenticationForm from "@/app/_components/authentication/form";
import AuthenticationCopyRight from "@/app/_components/authentication/copyRight";

export default function AuthenticationRegister() {
  const router = useRouter();

  const initialValueFormsFilds: IAuthenticationRegister = {
    email: {
      value: "",
      error: false,
    },
    name: {
      value: "",
      error: false,
    },
    password: {
      value: "",
      error: false,
    },
    confirmPassword: {
      value: "",
      error: false,
    },
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [mensagemRequest, setMensagemRequest] = useState<ImensagemRequest>({
    status: 0,
    message: "",
  });
  const [formsFilds, setFormsFilds] = useState<IAuthenticationRegister>(
    initialValueFormsFilds
  );

  return (
    <AuthenticationContainer>
      <AuthenticationHeader />
      <AuthenticationForm
        title="Registre-se"
        subTitle=" Para criar sua conta, prencha os campos abaixo."
      >
        <>
          <FormInput
            label="Nome:"
            name="name"
            type="text"
            onChange={(e) => {
              handleChancheField(e, setFormsFilds, formsFilds);
            }}
            error={formsFilds.name.error}
          />
          <FormInput
            label="E-mail:"
            name="email"
            type="email"
            onChange={(e) => {
              handleChancheField(e, setFormsFilds, formsFilds);
            }}
            error={formsFilds.email.error}
          />
          <FormInput
            label="Senha:"
            name="password"
            type="password"
            onChange={(e) => {
              handleChancheField(e, setFormsFilds, formsFilds);
            }}
            error={formsFilds.password.error}
          />
          <FormInput
            label="Confirmar senha:"
            name="confirmPassword"
            type="password"
            onChange={(e) => {
              handleChancheField(e, setFormsFilds, formsFilds);
            }}
            error={formsFilds.confirmPassword.error}
          />
          <FormLink destiny="/authentication/login" text="Ja possui conta?" />
          <FormLoading loading={loading} />
          <FormMessage mensagemRequest={mensagemRequest} />
          <Button text="Enviar" type="submit" />
        </>
      </AuthenticationForm>
      <AuthenticationCopyRight/>
    </AuthenticationContainer>
  );
}