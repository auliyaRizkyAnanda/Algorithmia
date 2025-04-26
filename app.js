const express = require('express');
const session = require('express-session');
const bodyParser = require("body-parser");
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
      secret: "secret_key", // Anda bisa mengganti dengan string rahasia
      resave: false,
      saveUninitialized: true
    })
  );

// Menyajikan file static (misalnya gambar, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine ke EJS
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));


// Rute untuk halaman login
app.get("/", (req, res) => {
  res.render("login");
});

// Rute untuk proses login
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(`Username: ${username}, Password: ${password}`);

    // Data pengguna
    const users = {
        haidar: { username: "haidar", password: "1234567"},
        nabilah: { username: "nabilah", password: "1234567"},
        afnan: { username: "afnan", password: "1234567"},
        andre: { username: "andre", password: "1234567"},
        dhimas: { username: "dhimas", password: "1234567"},
        ali: { username: "ali", password: "1234567"}
    };
 
    if (users[username] && users[username].password === password) {
        console.log("Login berhasil");
        // Simpan username dalam session
        req.session.username = username;
        // Jika login berhasil, arahkan ke halaman surat dengan data pengguna    
        res.redirect("/surat");
    } else {
        // Jika login gagal
        console.log("Login gagal");
        res.send("Login gagal! Username atau password salah.");
    }
});

// Rute untuk halaman surat (setelah login)
app.get("/surat", (req, res) => {
    const username = req.session.username;
    if (username) {
      const users = {
        haidar: { firstName: "Haidar"},
        nabilah: { firstName: "Nabilah" },
        afnan: { firstName: "Afnan"},
        andre: { firstName: "Andre"},
        dhimas: { firstName: "Dhimas"},
        ali: { firstName: "Ali"}
      };
  
      // Ambil data berdasarkan username yang ada di session
      const user = users[username];
      res.render("surat", {  
        firstName: user.firstName,
        lastName: user.lastName,
        message: user.message
      });
    } else {
      res.redirect("/"); 
    }
});

// Rute untuk halaman bukaSurat
app.get("/bukaSurat", (req, res) => {
    const username = req.session.username;  
    
    if (username) {
      const users = {
        haidar: { 
          firstName: "Haidar", 
          message: "Saya ingin mengucapkan terima kasih atas kerja sama dan komitmen kalian selama kita menjalankan kegiatan ini. Dengan jumlah anggota yang hanya enam orang, kita berhasil menyelesaikan seluruh dokumentasi dengan baik, tepat waktu, dan tetap menjaga kualitas. Saya sangat menghargai usaha kalian, mulai dari koordinasi, pengambilan dokumentasi, editing, hingga publikasi. Saya tahu tidak selalu mudah, tapi kalian tetap menjalankannya dengan tanggung jawab dan semangat yang luar biasa. Terima kasih sudah jadi bagian dari tim ini. Semoga pengalaman ini bisa jadi bekal positif untuk perjalanan kita ke depannya, baik secara pribadi maupun profesional.",
          fotoProfil: "haidar.png"
        },
        nabilah: { 
          firstName: "Nabilah", 
          message: "Saya ingin mengucapkan terima kasih atas kerja sama dan komitmen kalian selama kita menjalankan kegiatan ini. Dengan jumlah anggota yang hanya enam orang, kita berhasil menyelesaikan seluruh dokumentasi dengan baik, tepat waktu, dan tetap menjaga kualitas. Saya sangat menghargai usaha kalian, mulai dari koordinasi, pengambilan dokumentasi, editing, hingga publikasi. Saya tahu tidak selalu mudah, tapi kalian tetap menjalankannya dengan tanggung jawab dan semangat yang luar biasa. Terima kasih sudah jadi bagian dari tim ini. Semoga pengalaman ini bisa jadi bekal positif untuk perjalanan kita ke depannya, baik secara pribadi maupun profesional.",
          fotoProfil: "nabilah.png"
        },
        afnan: { 
          firstName: "Afnan", 
          message: "Saya ingin mengucapkan terima kasih atas kerja sama dan komitmen kalian selama kita menjalankan kegiatan ini. Dengan jumlah anggota yang hanya enam orang, kita berhasil menyelesaikan seluruh dokumentasi dengan baik, tepat waktu, dan tetap menjaga kualitas. Saya sangat menghargai usaha kalian, mulai dari koordinasi, pengambilan dokumentasi, editing, hingga publikasi. Saya tahu tidak selalu mudah, tapi kalian tetap menjalankannya dengan tanggung jawab dan semangat yang luar biasa. Terima kasih sudah jadi bagian dari tim ini. Semoga pengalaman ini bisa jadi bekal positif untuk perjalanan kita ke depannya, baik secara pribadi maupun profesional.",
          fotoProfil: "afnan.png"
        },
        andre: { 
          firstName: "Andre", 
          message: "Saya ingin mengucapkan terima kasih atas kerja sama dan komitmen kalian selama kita menjalankan kegiatan ini. Dengan jumlah anggota yang hanya enam orang, kita berhasil menyelesaikan seluruh dokumentasi dengan baik, tepat waktu, dan tetap menjaga kualitas. Saya sangat menghargai usaha kalian, mulai dari koordinasi, pengambilan dokumentasi, editing, hingga publikasi. Saya tahu tidak selalu mudah, tapi kalian tetap menjalankannya dengan tanggung jawab dan semangat yang luar biasa. Terima kasih sudah jadi bagian dari tim ini. Semoga pengalaman ini bisa jadi bekal positif untuk perjalanan kita ke depannya, baik secara pribadi maupun profesional.",
          fotoProfil: "andre.png"
        },
        dhimas: { 
          firstName: "Dhimas", 
          message: "Saya ingin mengucapkan terima kasih atas kerja sama dan komitmen kalian selama kita menjalankan kegiatan ini. Dengan jumlah anggota yang hanya enam orang, kita berhasil menyelesaikan seluruh dokumentasi dengan baik, tepat waktu, dan tetap menjaga kualitas. Saya sangat menghargai usaha kalian, mulai dari koordinasi, pengambilan dokumentasi, editing, hingga publikasi. Saya tahu tidak selalu mudah, tapi kalian tetap menjalankannya dengan tanggung jawab dan semangat yang luar biasa. Terima kasih sudah jadi bagian dari tim ini. Semoga pengalaman ini bisa jadi bekal positif untuk perjalanan kita ke depannya, baik secara pribadi maupun profesional.",
          fotoProfil: "dhimas.png"
        },
        ali: { 
          firstName: "Ali", 
          message: "Saya ingin mengucapkan terima kasih atas kerja sama dan komitmen kalian selama kita menjalankan kegiatan ini. Dengan jumlah anggota yang hanya enam orang, kita berhasil menyelesaikan seluruh dokumentasi dengan baik, tepat waktu, dan tetap menjaga kualitas. Saya sangat menghargai usaha kalian, mulai dari koordinasi, pengambilan dokumentasi, editing, hingga publikasi. Saya tahu tidak selalu mudah, tapi kalian tetap menjalankannya dengan tanggung jawab dan semangat yang luar biasa. Terima kasih sudah jadi bagian dari tim ini. Semoga pengalaman ini bisa jadi bekal positif untuk perjalanan kita ke depannya, baik secara pribadi maupun profesional.",
          fotoProfil: "closing.jpg"
        }
      };
      
      const user = users[username];
      if (user) {
        // Render halaman bukaSurat.ejs dengan data pengguna yang sesuai
        res.render("bukaSurat", {  // Hapus tanda "/" sebelum nama file ejs
          firstName: user.firstName,
          message: user.message,
          fotoProfil: user.fotoProfil // Pastikan ini sesuai dengan data pengguna
        });
      } else {
        res.redirect("/");  // Redirect ke login jika pengguna tidak ditemukan
      }
    } else {
      res.redirect("/");  // Redirect ke login jika session username tidak ada
    }
});

// Menjalankan server pada port 3000
app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});
