import Link from 'next/link';
import { notFound } from 'next/navigation';

const vacinasData: Record<string, {
  nome: string;
  icone: string;
  cor: string;
  descricao: string;
  composicao: string;
  indicacao: string;
  esquemaVacinal: string;
  eficacia: string;
  contraindicacoes: string;
  reacoesAdversas: string;
}> = {
  'influenza': {
    nome: 'Influenza Sazonal Trivalente',
    icone: '💉',
    cor: '#e74c3c',
    descricao: 'A vacina Influenza do Butantan protege contra os três tipos de vírus Influenza mais prevalentes e sua composição é alterada anualmente, devido à alta taxa de mutação do vírus.',
    composicao: 'Produzida a partir da inoculação do vírus em ovos embrionados de galinhas. Após incubação, o líquido alantóico é colhido, centrifugado, concentrado, fragmentado e inativado. A mistura das suspensões de cada monovalente resulta na vacina trivalente.',
    indicacao: 'Indicada para prevenção da gripe causada pelos vírus Influenza A e B. Prioritariamente para grupos de risco: idosos acima de 60 anos, crianças de 6 meses a 5 anos, gestantes, puérperas, profissionais de saúde, povos indígenas, pessoas com doenças crônicas e imunossuprimidos.',
    esquemaVacinal: 'Dose única anual de 0,5 mL por via intramuscular. Crianças de 6 meses a 8 anos que nunca foram vacinadas devem receber 2 doses com intervalo de 4 semanas.',
    eficacia: 'Eficácia de 70-90% em adultos saudáveis quando há boa correspondência entre as cepas vacinais e circulantes. Em idosos, pode ser menor (30-40%) mas reduz significativamente complicações graves e mortalidade.',
    contraindicacoes: 'Pessoas com histórico de reação anafilática prévia a doses anteriores da vacina ou a algum componente. Alergia grave a ovo (anafilaxia). Febre alta no momento da vacinação (adiar).',
    reacoesAdversas: 'Reações locais: dor, vermelhidão e inchaço no local da aplicação (10-40% dos casos). Reações sistêmicas: febre baixa, mal-estar, mialgia (afetam menos de 10% dos vacinados). Sintomas geralmente leves e desaparecem em 1-2 dias.'
  },
  'hepatite-a': {
    nome: 'Hepatite A',
    icone: '🦠',
    cor: '#e67e22',
    descricao: 'Vacina inativada contra o vírus da hepatite A (HAV), que causa infecção hepática aguda transmitida principalmente por via fecal-oral.',
    composicao: 'Contém vírus da hepatite A inativado (cepa HM-175), cultivado em células diploides humanas MRC-5, purificado e adsorvido em hidróxido de alumínio.',
    indicacao: 'Prevenção da hepatite A. Recomendada para crianças a partir de 12 meses, pessoas com doenças hepáticas crônicas, viajantes para áreas endêmicas, profissionais de saúde, manipuladores de alimentos e pessoas em situação de rua.',
    esquemaVacinal: 'Crianças: 2 doses (aos 15 meses e aos 18 meses). Adultos: 2 doses com intervalo de 6 meses. Dose de 0,5 mL (crianças) ou 1,0 mL (adultos) por via intramuscular.',
    eficacia: 'Proteção superior a 95% após a primeira dose. Após o esquema completo, confere imunidade por pelo menos 20 anos, possivelmente por toda a vida.',
    contraindicacoes: 'Hipersensibilidade a qualquer componente da vacina. Reação alérgica grave à dose anterior. Febre alta (adiar vacinação).',
    reacoesAdversas: 'Reações locais: dor, vermelhidão e endurecimento no local (20% dos casos). Reações sistêmicas: febre baixa, fadiga, cefaleia, perda de apetite (menos de 10%). Reações graves são raras.'
  },
  'hepatite-b': {
    nome: 'Hepatite B',
    icone: '🛡️',
    cor: '#f39c12',
    descricao: 'Vacina recombinante contra o vírus da hepatite B (HBV), que pode causar infecção crônica do fígado, cirrose e câncer hepático.',
    composicao: 'Contém antígeno de superfície do vírus da hepatite B (HBsAg) purificado, produzido por tecnologia de DNA recombinante em células de levedura (Saccharomyces cerevisiae), adsorvido em hidróxido de alumínio.',
    indicacao: 'Prevenção da hepatite B. Recomendada para todos os recém-nascidos (primeira dose nas primeiras 12-24 horas de vida), crianças, adolescentes, adultos não vacinados, profissionais de saúde, pessoas com múltiplos parceiros sexuais, usuários de drogas injetáveis e portadores de doenças crônicas.',
    esquemaVacinal: 'Recém-nascidos: ao nascer, 2 e 6 meses. Crianças e adultos: 0, 1 e 6 meses (3 doses). Dose de 0,5 mL (menores de 20 anos) ou 1,0 mL (adultos) por via intramuscular.',
    eficacia: 'Após o esquema completo, protege 95% dos lactentes, crianças e adultos jovens. A proteção pode durar mais de 20 anos ou ser permanente.',
    contraindicacoes: 'Hipersensibilidade a qualquer componente da vacina, especialmente à levedura. Reação anafilática a dose anterior. Febre alta (adiar).',
    reacoesAdversas: 'Reações locais: dor e vermelhidão no local (3-29%). Reações sistêmicas: fadiga, febre baixa, cefaleia (1-6%). Reações graves são extremamente raras.'
  },
  'hpv': {
    nome: 'HPV (Papilomavírus Humano)',
    icone: '💊',
    cor: '#16a085',
    descricao: 'Vacina contra o Papilomavírus Humano (HPV), vírus responsável por verrugas genitais e diversos tipos de câncer, incluindo câncer de colo de útero, vulva, vagina, pênis, ânus e orofaringe.',
    composicao: 'Vacina quadrivalente recombinante contendo proteínas L1 dos tipos 6, 11, 16 e 18 do HPV, produzidas por tecnologia de DNA recombinante em células de levedura.',
    indicacao: 'Prevenção de lesões pré-cancerosas e cânceres causados pelos tipos de HPV incluídos na vacina. Recomendada para meninas de 9 a 14 anos e meninos de 11 a 14 anos. Também indicada para pessoas imunodeprimidas de 9 a 45 anos.',
    esquemaVacinal: 'Crianças e adolescentes de 9 a 14 anos: 2 doses com intervalo de 6 meses. Pessoas de 15 anos ou mais: 3 doses (0, 2 e 6 meses). Dose de 0,5 mL por via intramuscular.',
    eficacia: 'Eficácia de 95-100% na prevenção de lesões pré-cancerosas e verrugas genitais causadas pelos tipos vacinais quando administrada antes da exposição ao vírus.',
    contraindicacoes: 'Hipersensibilidade a qualquer componente. Reação alérgica grave à dose anterior. Gravidez (por precaução, embora não haja evidência de risco fetal). Febre alta (adiar).',
    reacoesAdversas: 'Reações locais: dor, vermelhidão e inchaço no local (80% dos casos). Reações sistêmicas: febre, cefaleia, fadiga (25-30%). Síncope pode ocorrer, principalmente em adolescentes (recomenda-se observação por 15 minutos após vacinação).'
  },
  'raiva': {
    nome: 'Raiva',
    icone: '🐕',
    cor: '#2980b9',
    descricao: 'Vacina inativada contra o vírus da raiva, doença viral aguda que afeta o sistema nervoso central e é quase sempre fatal uma vez manifestados os sintomas.',
    composicao: 'Contém vírus da raiva inativado (cepa Pasteur Virus/PV), cultivado em células Vero, purificado e inativado com beta-propiolactona.',
    indicacao: 'Prevenção da raiva em profilaxia pré-exposição (profissionais de risco como veterinários, biólogos, trabalhadores de laboratório) e pós-exposição (após mordedura, arranhadura ou contato com saliva de animal suspeito).',
    esquemaVacinal: 'Pré-exposição: 3 doses nos dias 0, 7 e 21 ou 28. Pós-exposição: 4 ou 5 doses dependendo do histórico vacinal e gravidade da exposição, associado ou não a soro antirrábico. Dose de 0,5 mL ou 1,0 mL por via intramuscular.',
    eficacia: 'Eficácia de praticamente 100% quando o esquema completo é administrado corretamente. A imunização pré-exposição não elimina a necessidade de profilaxia pós-exposição, mas simplifica o tratamento.',
    contraindicacoes: 'Para profilaxia pré-exposição: hipersensibilidade grave aos componentes. Para profilaxia pós-exposição: NÃO HÁ contraindicações absolutas devido à gravidade da doença.',
    reacoesAdversas: 'Reações locais: dor, vermelhidão, endurecimento (30-74%). Reações sistêmicas: cefaleia, náusea, dor abdominal, dor muscular, tontura (5-40%). Reações alérgicas graves são raras.'
  },
  'difteria-tetano': {
    nome: 'DTP, DT, dT (Difteria, Tétano e Pertussis)',
    icone: '💪',
    cor: '#8e44ad',
    descricao: 'Vacinas combinadas contra difteria, tétano e coqueluche (pertussis). DTP é a vacina tríplice bacteriana (infantil), DT é dupla infantil (sem coqueluche) e dT é a dupla adulto (com menor concentração de antígeno diftérico).',
    composicao: 'DTP: toxoides diftérico e tetânico + células inativadas de Bordetella pertussis, com hidróxido de alumínio. DT: toxoides diftérico e tetânico. dT: toxoides com concentração reduzida de antígeno diftérico.',
    indicacao: 'DTP: crianças menores de 7 anos. DT: crianças com contraindicação ao componente pertussis. dT: adolescentes, adultos e reforços a cada 10 anos, gestantes (como dTpa quando possível).',
    esquemaVacinal: 'DTP: 3 doses aos 2, 4 e 6 meses, com reforços aos 15 meses e 4 anos. dT: reforço a cada 10 anos ou em caso de ferimentos graves (se última dose há mais de 5 anos). Dose de 0,5 mL por via intramuscular.',
    eficacia: 'Difteria: 97% após 3 doses. Tétano: praticamente 100% após esquema completo. Pertussis: 70-90% na prevenção de doença grave.',
    contraindicacoes: 'Reação anafilática a dose anterior. Para componente pertussis: encefalopatia nos 7 dias após dose anterior, convulsões nas primeiras 72 horas após vacinação anterior.',
    reacoesAdversas: 'Reações locais: dor, vermelhidão, endurecimento (50-80% dos casos). Reações sistêmicas: febre, irritabilidade, sonolência (30-60%, principalmente em DTP). Nódulo no local pode persistir por semanas.'
  },
  'dtpa': {
    nome: 'dTpa (Tríplice Bacteriana Acelular)',
    icone: '👶',
    cor: '#c0392b',
    descricao: 'Vacina tríplice bacteriana acelular do tipo adulto, contendo toxoides diftérico e tetânico com concentração reduzida e componente pertussis acelular. Indicada principalmente para gestantes e profissionais de saúde.',
    composicao: 'Toxoide diftérico (concentração reduzida), toxoide tetânico e antígenos purificados de Bordetella pertussis (acelular), adsorvidos em hidróxido de alumínio.',
    indicacao: 'Prioritariamente para gestantes a partir da 20ª semana de gestação (idealmente entre 27-36 semanas) para proteção do recém-nascido contra coqueluche. Também para profissionais de saúde e cuidadores de recém-nascidos.',
    esquemaVacinal: 'Gestantes: 1 dose a cada gestação, independente do intervalo entre gestações. Adultos não gestantes: 1 dose de dTpa, seguida de reforços com dT a cada 10 anos. Dose de 0,5 mL por via intramuscular.',
    eficacia: 'Eficácia de 90-95% na prevenção de coqueluche. A vacinação na gestação transfere anticorpos ao feto, protegendo o bebê nos primeiros meses de vida (quando é mais vulnerável).',
    contraindicacoes: 'Reação anafilática a dose anterior de vacina contendo os mesmos componentes. Encefalopatia nos 7 dias após dose anterior de vacina com componente pertussis.',
    reacoesAdversas: 'Reações locais: dor, vermelhidão, inchaço no local (20-30%). Reações sistêmicas: fadiga, cefaleia, dor muscular (25-40% dos adultos). Febre é menos comum que em DTP infantil.'
  }
};

// CORREÇÃO: Tornar a função async e aguardar params
export default async function VacinaDetalhes({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Aguardar a resolução de params
  const { id } = await params;
  const vacina = vacinasData[id];

  if (!vacina) {
    notFound();
  }

  return (
    <main style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem' }}>
      {/* Breadcrumb */}
      <div style={{ marginBottom: '2rem', fontSize: '0.9rem', color: '#7f8c8d' }}>
        <Link href="/" style={{ color: '#3498db', textDecoration: 'none' }}>Início</Link>
        {' > '}
        <Link href="/vacinas" style={{ color: '#3498db', textDecoration: 'none' }}>Vacinas</Link>
        {' > '}
        <span>{vacina.nome}</span>
      </div>

      {/* Header da Vacina */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: 15,
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        textAlign: 'center',
        borderTop: `6px solid ${vacina.cor}`
      }}>
        <div style={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3.5rem',
          margin: '0 auto 1rem',
          backgroundColor: vacina.cor + '20'
        }}>
          {vacina.icone}
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem' }}>
          {vacina.nome}
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6 }}>
          {vacina.descricao}
        </p>
      </div>

      {/* Seções de Informação */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <section style={{
          backgroundColor: 'white',
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderLeft: `4px solid ${vacina.cor}`
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🧪 Composição
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8 }}>{vacina.composicao}</p>
        </section>

        <section style={{
          backgroundColor: 'white',
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderLeft: `4px solid ${vacina.cor}`
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🎯 Indicação
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8 }}>{vacina.indicacao}</p>
        </section>

        <section style={{
          backgroundColor: 'white',
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderLeft: `4px solid ${vacina.cor}`
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            📋 Esquema Vacinal
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8 }}>{vacina.esquemaVacinal}</p>
        </section>

        <section style={{
          backgroundColor: 'white',
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderLeft: `4px solid ${vacina.cor}`
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ✅ Eficácia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8 }}>{vacina.eficacia}</p>
        </section>

        <section style={{
          backgroundColor: 'white',
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #e74c3c'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ⚠️ Contraindicações
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8 }}>{vacina.contraindicacoes}</p>
        </section>

        <section style={{
          backgroundColor: 'white',
          borderRadius: 12,
          padding: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #f39c12'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            💊 Reações Adversas
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8 }}>{vacina.reacoesAdversas}</p>
        </section>
      </div>

      {/* Aviso Importante */}
      <div style={{
        marginTop: '2rem',
        backgroundColor: '#fff3cd',
        padding: '1.5rem',
        borderRadius: 12,
        borderLeft: '4px solid #ffc107'
      }}>
        <p style={{ margin: 0, color: '#856404', lineHeight: 1.6 }}>
          ⚠️ <strong>Importante:</strong> As informações apresentadas são de caráter educativo. 
          Sempre consulte um profissional de saúde para orientações específicas sobre vacinação, 
          especialmente em casos de dúvidas sobre indicações, contraindicações ou reações adversas.
        </p>
      </div>

      {/* Botão Voltar */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link 
          href="/vacinas"
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            backgroundColor: '#b13f3f',
            color: 'white',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
        >
          ← Voltar para todas as vacinas
        </Link>
      </div>
    </main>
  );
}