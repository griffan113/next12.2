import { useTheme } from "@chakra-ui/react";
import { GetServerSidePropsContext, GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { MapPin } from "phosphor-react";
import axios from "axios";
import Link from "next/link";

interface CEPDetailsProps {
  cep_info: {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
  };
}

const CEPDetails: NextPage<CEPDetailsProps> = ({ cep_info }) => {
  const router = useRouter();
  const theme = useTheme();

  const { cep } = router.query;

  console.log(cep_info);

  if (!cep)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-10">
        <section className="flex flex-col items-center gap-5">
          <h1 className="text-3xl font-bold">CEP não encontrado</h1>
        </section>
      </div>
    );

  return (
    <>
      <Head>
        <title>CEP: {cep}</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen gap-10">
        <section className="flex flex-col items-center gap-5">
          <MapPin size={60} color={theme.colors.blue[500]} />
          <h1 className="text-3xl font-bold">CEP Info</h1>
        </section>

        <section className="flex flex-col justify-center items-center">
          <span>CEP: {cep_info.cep}</span>
          <span>Bairro: {cep_info.bairro}</span>
          <span>Localidade: {cep_info.localidade}</span>
          <span>Logradouro: {cep_info.logradouro}</span>
          <span>UF: {cep_info.uf}</span>
        </section>

        <span className="font-bold">
          <Link href="/">Voltar</Link>
        </span>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const response = await axios.get(
    `https://viacep.com.br/ws/${context.query.cep}/json/`
  );

  return {
    props: {
      cep_info: response.data,
    }, // will be passed to the page component as props
  };
};

export default CEPDetails;
