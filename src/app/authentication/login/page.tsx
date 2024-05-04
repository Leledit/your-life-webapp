"use client";
import AuthenticationContainer from "@/app/_components/authentication/container";
import AuthenticationCopyRight from "@/app/_components/authentication/copyRight";
import AuthenticationForm from "@/app/_components/authentication/form";
import AuthenticationHeader from "@/app/_components/authentication/header";
import Button from "@/app/_components/form/button";
import FormInput from "@/app/_components/form/input";
import FormLink from "@/app/_components/form/link";
import FormLoading from "@/app/_components/form/loading";
import FormMessage from "@/app/_components/form/message";
import { IAuthenticationLogin } from "@/app/_interface/authentication";
import { ImensagemRequest } from "@/app/_interface/forms";
import { handleChancheField } from "@/app/_utils/formHandling";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthenticationLogin() {
  const router = useRouter();

  const initialValueFormsFilds: IAuthenticationLogin = {
    email: {
      error: false,
      value: "",
    },
    password: {
      error: false,
      value: "",
    },
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [mensagemRequest, setMensagemRequest] = useState<ImensagemRequest>({
    status: 0,
    message: "",
  });
  const [formsFilds, setFormsFilds] = useState<IAuthenticationLogin>(
    initialValueFormsFilds
  );

  return (
    <AuthenticationContainer>
      <AuthenticationHeader />
      <AuthenticationForm title="Login" subTitle="Entre na sua conta.">
        <>
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
          <FormLink destiny="/authentication/register" text="Ainda não possui conta?" />
          <FormLoading loading={loading} />
          <FormMessage mensagemRequest={mensagemRequest} />
          <Button text="Enviar" type="submit" />
        </>
      </AuthenticationForm>
      <AuthenticationCopyRight />
    </AuthenticationContainer>
  );
}
