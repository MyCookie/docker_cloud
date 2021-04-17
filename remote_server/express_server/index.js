const express = require("express");

const server = express();
const port = 8080;

const maytheforce = "magnet:?xt=urn:btih:2fd6768765b144ddcd9ce4346fdd4410f3dd8dd9&dn=Star%20Wars%20Revenge%20of%20the%20Clone%20Wars%20Cut.mp4&tr=udp%3a%2f%2ftracker.iamhansen.xyz%3a2000%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.akado-ural.ru%3a80%2fannounce&tr=udp%3a%2f%2ftracker.fortu.io%3a6969%2fannounce&tr=udp%3a%2f%2fchihaya.de%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=https%3a%2f%2ftracker.nitrix.me%3a443%2fannounce&tr=http%3a%2f%2ftracker.ipv6tracker.ru%3a80%2fannounce&tr=udp%3a%2f%2fbt2.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.netbynet.ru%3a2710%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2ftracker.tamersunion.org%3a443%2fannounce&tr=udp%3a%2f%2ftracker.uw0.xyz%3a6969%2fannounce&tr=https%3a%2f%2ftracker.parrotlinux.org%3a443%2fannounce&tr=udp%3a%2f%2fxxxtor.com%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&tr=udp%3a%2f%2fzephir.monocul.us%3a6969%2fannounce&tr=udp%3a%2f%2fipv6.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=https%3a%2f%2ft1.leech.ie%3a443%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2faaa.army%3a8866%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.0o.is%3a6969%2fannounce&tr=https%3a%2f%2ftk.mabo.ltd%3a443%2fannounce&tr=udp%3a%2f%2fipv6.tracker.zerobytes.xyz%3a16661%2fannounce&tr=udp%3a%2f%2fopentor.org%3a2710%2fannounce&tr=udp%3a%2f%2ftracker3.itzmx.com%3a6961%2fannounce&tr=udp%3a%2f%2f9.rarbg.to%3a2710%2fannounce&tr=http%3a%2f%2ftracker1.itzmx.com%3a8080%2fannounce&tr=udp%3a%2f%2ftracker.beeimg.com%3a6969%2fannounce&tr=udp%3a%2f%2fvalakas.rollo.dnsabr.com%3a2710%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fopen.nyap2p.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ds.is%3a6969%2fannounce&tr=https%3a%2f%2ftracker.vectahosting.eu%3a8443%2fannounce&tr=https%3a%2f%2fw.wwwww.wtf%3a443%2fannounce&tr=udp%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=http%3a%2f%2ftracker.files.fm%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.e-utp.net%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.me%3a2710%2fannounce&tr=https%3a%2f%2ftracker.sloppyta.co%3a443%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=udp%3a%2f%2fu.wwwww.wtf%3a1%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=udp%3a%2f%2fretracker.hotplug.ru%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ft.overflow.biz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.teambelgium.net%3a6969%2fannounce&tr=http%3a%2f%2ftracker2.itzmx.com%3a6961%2fannounce&tr=udp%3a%2f%2ftracker-udp.gbitt.info%3a80%2fannounce&tr=http%3a%2f%2fvps02.net.orel.ru%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fz.mercax.com%3a53%2fannounce&tr=http%3a%2f%2ftracker.gbitt.info%3a80%2fannounce&tr=udp%3a%2f%2ftracker.birkenwald.de%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=http%3a%2f%2fh4.trakx.nibba.trade%3a80%2fannounce";

server.get("/maytheforce", (req, res) => {
  res.send(JSON.stringify({ "maytheforce": maytheforce }));
});

server.get("/sc4_guide", (req, res) => {
  res.sendFile("/opt/app/simcity4_guide.txt");
});

server.get("/", (req, res) => {
  res.send(JSON.stringify({ Greeting: "Hello, world!" }));
});

server.listen(port, () => {
  console.log(`Express server listening on ${port}`);
});
