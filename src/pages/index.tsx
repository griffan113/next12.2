import React, { useCallback, useState } from "react";
import type { NextPage } from "next";
import { Button, FormControl, Input, useTheme } from "@chakra-ui/react";
import Head from "next/head";
import { MapPin } from "phosphor-react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const theme = useTheme();
  const { push } = useRouter();
  const [cep, setCep] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (cep) {
        push(`/${cep}`);
      }
    },
    [cep, push]
  );

  return (
    <>
      <Head>
        <title>CEP explorer</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen gap-10">
        <section className="flex flex-col items-center gap-5">
          <MapPin size={60} color={theme.colors.blue[500]} />
          <h1 className="text-3xl font-bold">CEP Explorer</h1>
        </section>
        <section>
          <form onSubmit={handleSubmit}>
            <FormControl className="gap-2 flex flex-col">
              <Input
                type="number"
                onChange={(e) => {
                  setCep(e.target.value);
                }}
                name="cep"
                placeholder="Digite o CEP..."
              />
              <Button type="submit" colorScheme="blue">
                Buscar
              </Button>
            </FormControl>
          </form>
        </section>
      </div>
    </>
  );
};

export default Home;
