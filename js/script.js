class Funcionario {
  #salario;

  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.#salario = salario;
  }

  apresentar() {
    return 'Meu nome é ' + this.nome + ' e sou ' + this.cargo + '.';
  }

  verSalario() {
    return this.#salario;
  }

  aumentarSalario(valor) {
    if (valor > 0) {
      this.#salario = this.#salario + valor;
    }
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, cargo, salario, linguagem) {
    super(nome, cargo, salario);
    this.linguagem = linguagem;
  }

  apresentar() {
    return super.apresentar() + ' Programo em ' + this.linguagem + '.';
  }
}

class Designer extends Funcionario {
  constructor(nome, cargo, salario, ferramenta) {
    super(nome, cargo, salario);
    this.ferramenta = ferramenta;
  }

  apresentar() {
    return super.apresentar() + ' Trabalho com ' + this.ferramenta + '.';
  }
}

let funcionarios = [];

function cadastrar() {
  let nome = prompt('Qual é o nome do funcionário?');
  if (nome === null || nome.trim() === '') return;

  let cargo = prompt('Qual é o cargo?');
  if (cargo === null || cargo.trim() === '') return;

  let salario = parseFloat(prompt('Qual é o salário?'));
  if (isNaN(salario) || salario <= 0) {
    alert('Salário inválido. Cadastro cancelado.');
    return;
  }

  let tipo = prompt(
    'Tipo do funcionário:\n1 - Desenvolvedor\n2 - Designer',
  );

  let Funcionario;
  if (tipo === '1') {
    let linguagem = prompt('Qual linguagem ele usa?');
    Funcionario = new Desenvolvedor(nome, cargo, salario, linguagem);
  } else if (tipo === '2') {
    let ferramenta = prompt('Qual ferramenta ele usa?');
    Funcionario = new Designer(nome, cargo, salario, ferramenta);
  }

  funcionarios.push(Funcionario);

  console.log('Funcionário cadastrado');
  console.log('Nome: ' + Funcionario.nome);
  console.log('Cargo: ' + Funcionario.cargo);
  console.log('Salário: R$ ' + Funcionario.verSalario().toFixed(2));
  console.log('Apresentação: ' + Funcionario.apresentar());
  console.log('Total de funcionários: ' + funcionarios.length);

  mostrar();
}

function mostrar() {
  let texto = '';

  for (let i = 0; i < funcionarios.length; i++) {
    let Funcionario = funcionarios[i];
    texto += '<p>';
    texto += '<b>' + (i + 1) + '. ' + Funcionario.nome + '</b><br>';
    texto += 'Cargo: ' + Funcionario.cargo + '<br>';
    texto += 'Salário: R$ ' + Funcionario.verSalario().toFixed(2) + '<br>';
    texto += 'Apresentação: ' + Funcionario.apresentar();
    texto += '</p>';
  }

  document.getElementById('resultado').innerHTML = texto;
}
