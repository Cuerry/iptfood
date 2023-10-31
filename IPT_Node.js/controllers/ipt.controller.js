import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  host: 'localhost',
  port: '5432',
  database: 'IPTFOOD',
  user: 'postgres',
  password: '123456'
})

await client.connect()

/*---------------------------------------------------EXEMPLOS----------------------------------------------------*/
/*
export async function GetTime(req, res) {
  const result = await client.query('SELECT NOW()')
  console.log(result)
  res.status(200).json(result)
}

export async function getIPT(req, res) {
  res.status(200).json(client)
}

export async function addIPT(req, res) {
  if (client.find((client) => client.id === req.body.id)) {
    res.status(409).json('Hero id must be unique')
  }
  else{
    client.push(req.body)
    res.status(200).json(client)
  }
}

export async function deleteIPT(req, res) {
  const index = client.findIndex((client) => client.id == req.params.id)
  if (index >= 0) {
    client.splice(index, 1)
    res.status(200).json(client)
  } else res.status(400).send()
}
*/
export async function editIPT(req, res) {
  const index = client.findIndex((client) => client.id == req.body.id)
  if (index >= 0) {
    client.splice(index, 1, req.body)
    res.status(200).json(client)
  } else res.status(400).send()
}

/*----------------------------------User--------------------------------------------*/

export async function CreateUser(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const cargo = req.body.cargo;
  const contacto = req.body.contacto;
  const morada = req.body.morada;
  const met_pagamento = req.body.met_pagamento;
  const nif = req.body.nif;
  const data_nascimento = req.body.data_nascimento;
  console.log(`INSERT INTO public."User" (username, password, name, cargo, contacto, morada, met_pagamento, nif, data_nascimento) VALUES ('${username}', '${password}', '${name}', '${cargo}', '${contacto}', '${morada}', '${met_pagamento}', '${nif}', '${data_nascimento}');`);
  const result = await client.query(`INSERT INTO public."User" (username, password, name, cargo, contacto, morada, met_pagamento, nif, data_nascimento) VALUES ('${username}', '${password}', '${name}', '${cargo}', '${contacto}', '${morada}', '${met_pagamento}', '${nif}', '${data_nascimento}');`);
  console.log(result)
  res.status(200).json(result)
}

export async function ReadUser(req, res) {
  console.log(`SELECT * FROM public."User";`);
  const result = await client.query(`SELECT * FROM public."User";`);
  console.log(result)
  res.status(200).json(result)
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export async function DeleteUser(req, res){
  const id_user = req.body.id_user;
  console.log(`DELETE FROM public."User" WHERE id_user = ${id_user};`);
  const result = await client.query(`DELETE FROM public."User" WHERE id_user = ${id_user};`);
  console.log(result)
  res.status(200).json(result)
}

/*-----------------------------Restaurante-----------------------------------------*/

export async function CreateRestaurante(req, res) {
  const r_nome = req.body.r_nome;
  const r_morada = req.body.r_morada;
  const r_email = req.body.r_email;
  const r_contacto = req.body.r_contacto;
  const r_nif = req.body.r_nif;
  const r_status = req.body.status_disponibilidade;
  const disponibilidade = req.body.disponibilidade;
  console.log(`INSERT INTO public."Restaurante" (r_nome, r_morada, r_email, r_contacto, r_nif, status_disponibilidade, disponibilidade) VALUES ('${r_nome}', '${r_morada}', '${r_email}', '${r_contacto}', '${r_nif}', '${r_status}', '${disponibilidade}');`);
  const result = await client.query(`INSERT INTO public."Restaurante" (r_nome, r_morada, r_email, r_contacto, r_nif, status_disponibilidade, disponibilidade) VALUES ('${r_nome}', '${r_morada}', '${r_email}', '${r_contacto}', '${r_nif}', '${r_status}', '${disponibilidade}');`);
  console.log(result)
  res.status(200).json(result)
}

export async function ReadRestaurante(req, res) {
  console.log(`SELECT * FROM public."Restaurante";`);
  const result = await client.query(`SELECT * FROM public."Restaurante";`);
  console.log(result)
  res.status(200).json(result)
}

/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
export async function UpdateRestaurante(req, res){
  await client.connect()
  console.log(`INSERT INTO public."Restaurante" (r_nome, r_morada, r_email, r_contacto, r_nif, status_disponibilidade, disponibilidade) VALUES ('${r_nome}', '${r_morada}', '${r_email}', '${r_contacto}', '${r_nif}', '${status_disponibilidade}', '${disponibilidade}');`);
  const result = await client.query(`INSERT INTO public."Restaurante" (r_nome, r_morada, r_email, r_contacto, r_nif, status_disponibilidade, disponibilidade) VALUES ('${r_nome}', '${r_morada}', '${r_email}', '${r_contacto}', '${r_nif}', '${status_disponibilidade}', '${disponibilidade}');`);
}*/

export async function DeleteRestaurante(req, res){
  const id_r = req.body.id_r;
  console.log(`DELETE FROM public."Restaurante" WHERE id_r = ${id_r};`);
  const result = await client.query(`DELETE FROM public."Restaurante" WHERE id_r = ${id_r};`);
  console.log(result)
  res.status(200).json(result)
}

/*-------------------------------------Catalogo------------------------------------- */

export async function CreateCatalogo(req, res) {
  const id_r = req.body.id_r;
  const nome_prod = req.body.nome_prod;
  const tipo = req.body.tipo;
  const preco = req.body.preco;
  const stock = req.body.stock;
  const c_details = req.body.c_details;
  const desconto = req.body.desconto;
  console.log(`INSERT INTO public."Catalogo" (id_r, nome_prod, tipo, preco, stock, c_details, desconto) VALUES ('${id_r}','${nome_prod}', '${tipo}', '${preco}', '${stock}', '${c_details}', '${desconto}');`);
  const result = await client.query(`INSERT INTO public."Catalogo" (id_r, nome_prod, tipo, preco, stock, c_details, desconto) VALUES ('${id_r}','${nome_prod}', '${tipo}', '${preco}', '${stock}', '${c_details}', '${desconto}');`);
  console.log(result)
  res.status(200).json(result)
}

export async function ReadCatalogo(req, res) {
  console.log(`SELECT * FROM public."Catalogo";`);
  const result = await client.query(`SELECT * FROM public."Catalogo";`);
  console.log(result)
  res.status(200).json(result)
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export async function DeleteCatalogo(req, res){
  const id_c = req.body.id_c;
  console.log(`DELETE FROM public."Catalogo" WHERE id_c = ${id_c};`);
  const result = await client.query(`DELETE FROM public."Catalogo" WHERE id_c = ${id_c};`);
  console.log(result)
  res.status(200).json(result)
}

/*------------------------------Classificacoes_Restaurantes------------------------------------*/

export async function CreateClass_restaurantes(req, res) {
  const id_r = req.body.id_r;
  const r_avaliacao = req.body.r_avaliacao;
  const data = req.body.data;
  const id_user = req.body.id_user;
  const r_feedback = req.body.r_feedback;
  const id_p = req.body.id_p;
  console.log(`INSERT INTO public."Classificacoes_restaurantes" (id_r, r_avaliacao, data, id_user, r_feedback, id_p) VALUES ('${id_r}','${r_avaliacao}', '${data}', '${id_user}', '${r_feedback}', '${id_p}');`);
  const result = await client.query(`INSERT INTO public."Classificacoes_restaurantes" (id_r, r_avaliacao, data, id_user, r_feedback, id_p) VALUES ('${id_r}','${r_avaliacao}', '${data}', '${id_user}', '${r_feedback}', '${id_p}');`);
  console.log(result)
  res.status(200).json(result)
}

export async function ReadClass_restaurantes(req, res) {
  console.log(`SELECT * FROM public."Classificacoes_restaurantes";`);
  const result = await client.query(`SELECT * FROM public."Classificacoes_restaurantes";`);
  console.log(result)
  res.status(200).json(result)
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export async function DeleteClass_restaurantes(req, res){
  const id_c = req.body.id_c;
  const r_avaliacao = req.body.r_avaliacao;
  const data = req.body.data;
  const id_user = req.body.id_user;
  const r_feedback = req.body.r_feedback;
  const id_p = req.body.id_p;
  console.log(`DELETE FROM public."Classificacoes_restaurantes" WHERE id_c = ${id_c} AND r_avaliacao = ${r_avaliacao} AND data = ${data} AND id_user = ${id_user} AND r_feedback =${r_feedback} AND id_p = ${id_p};`);
  const result = await client.query(`DELETE FROM public."Classificacoes_restaurantes" WHERE id_c = ${id_c} AND r_avaliacao = ${r_avaliacao} AND data = ${data} AND id_user = ${id_user} AND r_feedback =${r_feedback} AND id_p = ${id_p};`);
  console.log(result)
  res.status(200).json(result)
}

/*------------------------------Pedido----------------------------------------*/

export async function CreatePedido(req, res) {
  const id_user = req.body.id_user;
  const id_estafeta = req.body.id_estafeta;
  const p_details = req.body.p_details;
  const status = req.body.status;
  console.log(`INSERT INTO public."Pedido" (id_user, id_estafeta, p_details, status) VALUES ('${id_user}', '${id_estafeta}', '${p_details}', '${status}');`);
  const result = await client.query(`INSERT INTO public."Pedido" (id_user, id_estafeta, p_details, status) VALUES ('${id_user}', '${id_estafeta}', '${p_details}', '${status}');`);
  console.log(result)
  res.status(200).json(result)
}

export async function ReadPedido(req, res) {
  console.log(`SELECT * FROM public."Pedido";`);
  const result = await client.query(`SELECT * FROM public."Pedido";`);
  console.log(result)
  res.status(200).json(result)
}

export async function DeletePedido(req, res){
  const id_p = req.body.id_p;
  console.log(`DELETE FROM public."Pedido" WHERE id_p = ${id_p};`);
  const result = await client.query(`DELETE FROM public."Pedido" WHERE id_p = ${id_p};`);
  console.log(result)
  res.status(200).json(result)
}

/*---------------------------------Classificacoes_estafeta------------------------------------- */

export async function CreateClass_estafeta(req, res) {
  const id_estafeta = req.body.id_estafeta;
  const e_avaliacao = req.body.e_avaliacao;
  const data = req.body.data;
  const id_user = req.body.id_user;
  const e_feedback = req.body.e_feedback;
  const id_p = req.body.id_p;
  console.log(`INSERT INTO public."Classificacoes_estafeta" (id_estafeta, e_avaliacao, data, id_user, e_feedback, id_p) VALUES ('${id_estafeta}', '${e_avaliacao}', '${data}', '${id_user}', '${e_feedback}', '${id_p}');`);
  const result = await client.query(`INSERT INTO public."Classificacoes_estafeta" (id_estafeta, e_avaliacao, data, id_user, e_feedback, id_p) VALUES ('${id_estafeta}', '${e_avaliacao}', '${data}', '${id_user}', '${e_feedback}', '${id_p}');`);
  console.log(result)
  res.status(200).json(result)
}

export async function ReadClass_estafeta(req, res) {
  console.log(`SELECT * FROM public."Classificacoes_estafeta";`);
  const result = await client.query(`SELECT * FROM public."Classificacoes_estafeta";`);
  console.log(result)
  res.status(200).json(result)
}

export async function DeleteClass_estafeta(req, res){
  const id_estafeta = req.body.id_estafeta;
  const e_avaliacao = req.body.e_avaliacao;
  const data = req.body.data;
  const id_user = req.body.id_user;
  const e_feedback = req.body.e_feedback;
  const id_p = req.body.id_p;
  console.log(`DELETE FROM public."Classificacoes_estafeta" WHERE id_estafeta = ${id_estafeta} AND e_avaliacao = ${e_avaliacao} AND data = ${data} AND id_user = ${id_user} AND e_feedback =${e_feedback} AND id_p = ${id_p};`);
  const result = await client.query(`DELETE FROM public."Classificacoes_estafeta" WHERE id_estafeta = ${id_estafeta} AND e_avaliacao = ${e_avaliacao} AND data = ${data} AND id_user = ${id_user} AND e_feedback =${e_feedback} AND id_p = ${id_p};`);
  console.log(result)
  res.status(200).json(result)
}

/*------------------------------Publicidade-------------------------------------- */

export async function CreatePublicidade(req, res) {
  const id_pub = req.body.id_pub;
  const nome = req.body.nome;
  const descricao = req.body.descricao;
  const empresa = req.body.empresa;
  console.log(`INSERT INTO public."Publicidade" (id_pub, nome, descricao, empresa) VALUES ('${id_pub}', '${nome}', '${descricao}', '${descricao}', '${empresa}');`);
  const result = await client.query(`INSERT INTO public."Publicidade" (id_pub, nome, descricao, empresa) VALUES ('${id_pub}', '${nome}', '${descricao}', '${descricao}', '${empresa}');`);
  console.log(result)
  res.status(200).json(result)
}

export async function ReadPublicidade(req, res) {
  console.log(`SELECT * FROM public."Publicidade";`);
  const result = await client.query(`SELECT * FROM public."Publicidade";`);
  console.log(result)
  res.status(200).json(result)
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export async function DeletePublicidade(req, res){
  const id_pub = req.body.id_pub;
  console.log(`DELETE FROM public."Publicidade" WHERE id_pub = ${id_pub};`);
  const result = await client.query(`DELETE FROM public."Publicidade" WHERE id_pub = ${id_pub};`);
  console.log(result)
  res.status(200).json(result)
}

/*------------------------------Metodos_de_Pagamento----------------------------------- */

export async function CreatePagamento(req, res) {
  const id_m = req.body.id_m;
  const name = req.body.name;
  console.log(`INSERT INTO public."Metodos_de_Pagamento" (id_m, name) VALUES ('${id_m}', '${name}');`);
  const result = await client.query(`INSERT INTO public."Metodos_de_Pagamento" (id_m, name) VALUES ('${id_m}', '${name}');`);
  console.log(result)
  res.status(200).json(result)
}

export async function ReadPagamento(req, res) {
  console.log(`SELECT * FROM public."Metodos_de_Pagamento";`);
  const result = await client.query(`SELECT * FROM public."Metodos_de_Pagamento";`);
  console.log(result)
  res.status(200).json(result)
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export async function DeletePagamento(req, res){
  const id_pub = req.body.id_pub;
  console.log(`DELETE FROM public."Metodos_de_Pagamento" WHERE id_m = ${id_m};`);
  const result = await client.query(`DELETE FROM public."Metodos_de_Pagamento" WHERE id_m = ${id_m};`);
  console.log(result)
  res.status(200).json(result)
}

/*----------------------------User_Restaurante--------------------------------------------- */

export async function CreateUser_restaurante(req, res) {
  const id_user = req.body.id_user;
  const id_r = req.body.id_r;
  const cargo = req.body.cargo;
  console.log(`INSERT INTO public."User_Restaurante" (id_user, id_r, cargo) VALUES ('${id_user}', '${id_r}', '${cargo}');`);
  const result = await client.query(`INSERT INTO public."User_Restaurante" (id_user, id_r, cargo) VALUES ('${id_user}', '${id_r}', '${cargo}');`);
  console.log(result)
  res.status(200).json(result)
}

export async function ReadUser_restaurante(req, res) {
  console.log(`SELECT * FROM public."User_Restaurante";`);
  const result = await client.query(`SELECT * FROM public."User_Restaurante";`);
  console.log(result)
  res.status(200).json(result)
}

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export async function DeleteUser_restaurante(req, res){
  const id_user = req.body.id_user;
  const id_r = req.body.id_r;
  const cargo = req.body.cargo;
  console.log(`DELETE FROM public."User_Restaurante" WHERE id_user = ${id_user} AND id_r = ${id_r} AND cargo = ${cargo};`);
  const result = await client.query(`DELETE FROM public."User_Restaurante" WHERE id_user = ${id_user} AND id_r = ${id_r} AND cargo = ${cargo};`);
  console.log(result)
  res.status(200).json(result)
}

/*------------------------------Historico--------------------------------------*/

export async function CreateHistorico(req, res) {
  const id_user = req.body.id_user;
  const data = req.body.data;
  const log = req.body.log;
  console.log(`INSERT INTO public."Historico" (id_user, data, log) VALUES ('${id_user}','${data}', '${log}');`);
  const result = await client.query(`INSERT INTO public."Historico" (id_user, data, log) VALUES ('${id_user}','${data}', '${log}');`);
  console.log(result)
  res.status(200).json(result)
}

export async function ReadHistorico(req, res) {
  console.log(`SELECT * FROM public."Historico";`);
  const result = await client.query(`SELECT * FROM public."Historico";`);
  console.log(result)
  res.status(200).json(result)
}


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\export async function UpdateHistorico(req, res){}

//Nota: Não sei como fazer o delete do Historico individualmente


/*Exportar o CRUD para cada tabela presente na base de dados*/

export const CRUDUser = {
  CreateUser,
  ReadUser,
  DeleteUser,
};

export const CRUDRestaurante = {
  CreateRestaurante,
  ReadRestaurante,
  DeleteRestaurante,
};

export const CRUDCatalogo = {
  CreateCatalogo,
  ReadCatalogo,
  DeleteCatalogo,
};

export const CRUDC_restaurantes = {
  CreateClass_restaurantes,
  ReadClass_restaurantes,
  DeleteClass_restaurantes,
};

export const CRUDPedido = {
  CreatePedido,
  ReadPedido,
  DeletePedido,
};

export const CRUDC_estafeta = {
  CreateClass_estafeta,
  ReadClass_estafeta,
  DeleteClass_estafeta,
};

export const CRUDPublicidade = {
  CreatePublicidade,
  ReadPublicidade,
  DeletePublicidade,
};

export const CRUDPagamento = {
  CreatePagamento,
  ReadPagamento,
  DeletePagamento,
};

export const CRUDURestaurante = {
  CreateUser_restaurante,
  ReadUser_restaurante,
  DeleteUser_restaurante,
};

export const CRUDHistorico = {
  CreateHistorico,
  ReadHistorico,
};