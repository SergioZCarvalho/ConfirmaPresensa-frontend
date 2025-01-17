import * as S from './styles';
import useLogic, { Props } from './useLogic';

const InviteConfirm = (props: Props) => {
  const {
    register,
    handleSubmit,

    onAcceptSubmit,
    onDenySubmit,
    acceptedState,
    handleCloseModal,
  } = useLogic(props);

  return (
    <>
      <div id="expanded"></div>
      <div>
        <S.Container id="invite">
          <S.Close onClick={handleCloseModal}></S.Close>

          <S.Text>Confirme sua presença no evento</S.Text>
          <S.FormContainer>
            <S.Group controlId="formGridName">
              <S.Label>Insira seu nome</S.Label>
              <S.Control type="text" placeholder="Insira seu nome" {...register('name')} />
            </S.Group>
            <S.Group controlId="formGridEmail">
              <S.Label>Insira seu email</S.Label>
              <S.Control type="email" placeholder="Insira seu email" {...register('email')} />
            </S.Group>
            {acceptedState !== 'NONE' && (
              <S.CustomAlert variant="info">
                {acceptedState === 'ACCEPTED'
                  ? 'Presença confirmada com sucesso!'
                  : 'Você recusou o convite!'}
              </S.CustomAlert>
            )}
          </S.FormContainer>
          <S.Buttons>
            {acceptedState !== 'DENIED' && (
              <S.LeftButton
                onClick={handleSubmit(onDenySubmit)}
                isSingle={acceptedState === 'ACCEPTED'}
              >
                <S.TextButton>
                  {acceptedState === 'ACCEPTED' ? 'Alterar para recusado' : 'Recusar'}
                </S.TextButton>
              </S.LeftButton>
            )}
            {acceptedState !== 'ACCEPTED' && (
              <S.RightButton
                onClick={handleSubmit(onAcceptSubmit)}
                isSingle={acceptedState === 'DENIED'}
              >
                <S.TextButton>
                  {acceptedState === 'DENIED' ? 'Alterar para aceito' : 'Aceitar'}
                </S.TextButton>
              </S.RightButton>
            )}
          </S.Buttons>
        </S.Container>
      </div>
    </>
  );
};

export default InviteConfirm;
