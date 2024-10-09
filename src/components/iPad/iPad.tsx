export function IPad() {
  return (
    <div className="flex justify-center items-center min-h-screen -translate-y-[220px]">
      {/* Container principal que vai segurar a imagem do iPad */}
      <div
        className="relative w-[662px] h-[461px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/728f/9e47/ce5d6a20a475c0027b8efd473c182a74?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DHlyKahB0zx~raTMGRJ4TD7F9flkQjH7-02NhTj-4wi-w0Bjq9GzFixso-GXctn0NT-mOdiN0b0LfbfHVRf5ElmIghCQaBVCyd8bg8sxSZijcnUNyI~0HFy4E~qQsMmcl7owIqoS2wmWGN2GMxDKKHCZTtqMrCO3nAzWzvxqhRvP3tIeSCYIXhEa~EHIn3yvNrUJBMtyqs~lhlMFngS7sPEZU1dpcuOqH9cR1nz6e9mkT93lLMaXSZdAVSytEq67eIxyhjxcINnYwOu7OyDrx4R5U0qn31gpfDtejXzMGjlFeK5g5KbhVaD1ivO-2CURrymHLANxafrerp0dmueRLA__')",
        }}
      >
        {/* Imagem no canto superior esquerdo */}
        <img
          src="https://s3-alpha-sig.figma.com/img/7a24/38b6/3cb66b157635dffb4b8f6be06c0d4dfb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZGnnkh6V1U3uV2WXW1ZDkQ3wCXH56iN0dfZ5UhdzgTAovYH7rpa0tmoL5UeTAPl1p9GwNeaoj0wowwgsory2vBkdQXTRYIIcny-HSqdHFkTTO-G3QUWz5i8VdiBmtztWc9LbgvcvBcO9InMLfn30sbHGOx~pTr4MTnbzZiSodOpS0k8z4FgaXHvPMf0GPVMhiuxwd09CFbvJtaRYEHMa2rh~4NJMi0xT2af2SuAQN2j-xWnpGk~UFWKuE5QrNyQpR3gnxtYQC39jaEc21wN~DgEKCQsI9ybRCfv0bfZ-8OWa4pzAS0B3y6i-AR1ia2anZ-th5tKTZMlqwQnNkBRsMQ__"
          alt="Superior Left Image"
          className="absolute top-0 left-0 w-[100px] h-[100px] object-cover m-2"
        />

        {/* Conteúdo dentro da imagem do iPad */}
        <div className="absolute inset-0 grid grid-cols-[187px_1fr] w-full h-full gap-1 rounded-[34px] border-8 border-[#313131] shadow-lg bg-white/70">
          {/* Container da Imagem */}
          <div className="flex items-end">
            <img
              src="https://s3-alpha-sig.figma.com/img/12e1/35f7/a27b8782871b7082d7ad4731ab51da7b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fCDiD~ap19rb42zJFM-ij9B7QoGf-7AzEC-7cFOVBtjrgVBOST7ktY2l0~26F1YxB3sKHul6uF~~Kr4CdjhNtP-UU1dnWa4GU2rxsPmKMUz8J2JdzM0lRp-YQdViHzpUiYcHjcnZgvdgk5GZOKTAo4SnjP3Bt0o5mnEAKXy6Zoih9ILTmLJp2yzcaGwraORxUEJYC1hdtfBjKRQ0pYpV45pXTLTuDB9FFMeQPJNrU3~rFlqZ8yY1sjT~FWty9LdsvVki0aClSSd3yOwpUs1xdvIagAIvsJy8HOODlpXLlqEhgZmI1wiWedTnFOkmiZeFv7-lcVpZsolK9UFHvIvzCg__"
              alt="Example content"
              className="w-full h-[332px] object-cover rounded-bl-[24px]"
            />
          </div>

          {/* Texto descritivo */}
          <div className="relative flex flex-col justify-center p-8">
            <h1 className="text-xl font-bold tracking-tight">
              Nosso trabalho é guiado pelas necessidades do povo baiano,
            </h1>
            <h2>
              com a transparência na destinação dos recursos como nosso principal
              objetivo. Aqui, você acompanha de perto como estamos empenhados em
              garantir que nossos municípios recebam recursos para melhorias em diversos
              setores. Além de prestar contas, este ambiente foi criado para que você
              possa acompanhar conosco as mudanças essenciais no nosso estado.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
