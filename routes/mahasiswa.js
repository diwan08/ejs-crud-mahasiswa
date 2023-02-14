const express = require('express');
const router = express.Router();

// call db
const db = require("../database");

// route GET all mahasiswa
router.get("/list", async function(req, res) {
  const mahasiswa = await db("mahasiswa");

  return res.render("mahasiswa", {
    mahasiswa
  });
});

// route view tambah mahasiswa
router.get("/tambah", async function(req, res) {
  return res.render("tambah_mahasiswa");
});

// route view detail mahasiswa
router.get("/detail/:id", async function(req, res) {
  const mahasiswa = await db("mahasiswa").where({ id: req.params.id }).first();

  return res.render("detail_mahasiswa", mahasiswa);
});

// route view edit mahasiswa
router.get("/edit/:id", async function(req, res) {
  const mahasiswa = await db("mahasiswa").where({ id: req.params.id }).first();

  return res.render("edit_mahasiswa", mahasiswa);
});

// route view delete mahasiswa
router.get("/delete/:id", async function(req, res) {
  await db("mahasiswa").where({ id: req.params.id }).del();

  return res.redirect("/mahasiswa/list");
});

// tambah mahasiswa
router.post("/tambah", async function(req, res) {
  await db("mahasiswa").insert({
    nama: req.body.nama,
    nim: req.body.nim,
    prodi: req.body.prodi,
    status: req.body.status
  });

  return res.redirect("/mahasiswa/list");
});

// tambah mahasiswa
router.post("/edit", async function(req, res) {
  await db("mahasiswa")
    .where({ id: req.body.id })
    .update({
      nama: req.body.nama,
      nim: req.body.nim,
      prodi: req.body.prodi,
      status: req.body.status
    });

  return res.redirect("/mahasiswa/list");
});



module.exports = router;
