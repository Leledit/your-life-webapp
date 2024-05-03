/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./index.module.scss";
import imgLogo from "../../../../public/images/logo.png";
import FormInput from "@/app/_components/form/input";
import { useState } from "react";
import { ImensagemRequest } from "@/app/_interface/forms";
import { handleChancheField } from "@/app/_utils/formHandling";
import { useRouter } from "next/navigation";

interface formFild {
  email: {
    value: string;
    error: boolean;
  };
  name: {
    value: string;
    error: boolean;
  };
  password: {
    value: string;
    error: boolean;
  };
  confirmPassword: {
    value: string;
    error: boolean;
  };
}

export default function AuthenticationRegister() {
  const router = useRouter();

  const initialValueFormsFilds: formFild = {
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
  const [formsFilds, setFormsFilds] = useState<formFild>(
    initialValueFormsFilds
  );

  return (
    <div className={styles.containerRegister}>
      <div className={styles.containerLogo}>
        <img src={imgLogo.src} alt="" className={styles.logo} />
      </div>
      <div className={styles.containerForm}>
        <h1 className={styles.title}>Registre-se</h1>
        <h2 className={styles.subTitle}>
          Para criar sua conta, prencha os campos abaixo.
        </h2>
        <form className={styles.form}>
          <FormInput
            label="E-mail:"
            name="email"
            type="email"
            onChange={(e) => {
              handleChancheField(e, setFormsFilds, formsFilds);
            }}
            error={formsFilds.email.error}
          />
        </form>
      </div>
    </div>
  );
}
