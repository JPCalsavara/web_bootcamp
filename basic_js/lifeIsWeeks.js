function lifeInWeeks(age) {
    // Definir a idade máxima esperada
    const maxAge = 90;
  
    // Calcular o tempo restante
    const yearsRemaining = maxAge - age;
    const monthsRemaining = yearsRemaining * 12;
    const weeksRemaining = yearsRemaining * 52;
    const daysRemaining = yearsRemaining * 365;
  
    // Exibir a mensagem formatada
    console.log(
      `You have ${daysRemaining} days, ${weeksRemaining} weeks, and ${monthsRemaining} months left.`
    );
  }
  
  // Chamada da função com exemplo de idade
  lifeInWeeks(18);
  