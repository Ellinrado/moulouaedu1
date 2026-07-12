/* =====================================================
   LES MATHÉMATIQUES POUR TOUS — style académique
   Palette : papier clair / encre marine / accent bordeaux
   ===================================================== */

@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,400&family=Inter:wght@400;500;600&display=swap');

:root{
  --paper:      #FAFAF7;
  --paper-alt:  #F2F0E9;
  --ink:        #1E2A38;
  --ink-soft:   #4A5568;
  --accent:     #7A2E2E;   /* bordeaux, une seule touche de couleur */
  --rule:       #D8D3C4;   /* hairline */
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  background:var(--paper);
  color:var(--ink);
  font-family:"Inter", Arial, sans-serif;
  line-height:1.6;
}

/* ================= HEADER ================= */
header{
  background:var(--paper);
  color:var(--ink);
  padding:70px 20px 50px;
  text-align:center;
  border-bottom:1px solid var(--rule);
}

header h1{
  font-family:"Lora", Georgia, serif;
  font-weight:600;
  font-size:40px;
  letter-spacing:0.5px;
  margin-bottom:12px;
}

header p{
  font-family:"Inter", sans-serif;
  font-size:15px;
  letter-spacing:3px;
  text-transform:uppercase;
  color:var(--ink-soft);
}

/* ================= RECHERCHE INTELLIGENTE ================= */
.search-wrap{
  position:relative;
  max-width:480px;
  margin:32px auto 0;
}

#smart-search{
  width:100%;
  padding:13px 18px;
  font-family:"Inter", sans-serif;
  font-size:15px;
  color:var(--ink);
  background:var(--paper);
  border:1px solid var(--rule);
  border-radius:4px;
  outline:none;
  transition:border-color .2s ease;
}

#smart-search::placeholder{
  color:var(--ink-soft);
}

#smart-search:focus{
  border-color:var(--accent);
}

.search-results{
  display:none;
  position:absolute;
  top:calc(100% + 6px);
  left:0;
  right:0;
  background:var(--paper);
  border:1px solid var(--rule);
  border-radius:4px;
  text-align:left;
  box-shadow:0 8px 20px rgba(0,0,0,0.08);
  overflow:hidden;
  z-index:10;
}

.search-results.active{
  display:block;
}

.search-result{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:12px 18px;
  text-decoration:none;
  color:var(--ink);
  font-size:14px;
  border-bottom:1px solid var(--rule);
  transition:background .15s ease;
}

.search-result:last-child{
  border-bottom:none;
}

.search-result:hover{
  background:var(--paper-alt);
  color:var(--accent);
}

.search-empty{
  padding:14px 18px;
  font-size:13px;
  color:var(--ink-soft);
  font-style:italic;
}

.result-niveau{
  font-size:12px;
  letter-spacing:0.5px;
  text-transform:uppercase;
  color:var(--ink-soft);
}

/* ================= CONTENU ================= */
.container{
  width:90%;
  max-width:1100px;
  margin:60px auto;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:1px;
  background:var(--rule);
  border:1px solid var(--rule);
}

/* ================= CARTES ================= */
.card{
  background:var(--paper);
  padding:35px 30px;
  transition:background .2s ease;
}

.card:hover{
  background:var(--paper-alt);
}

.card h2{
  font-family:"Lora", Georgia, serif;
  font-weight:600;
  font-size:22px;
  color:var(--ink);
  text-align:left;
  margin-bottom:22px;
  padding-bottom:14px;
  border-bottom:1px solid var(--rule);
}

/* ================= LISTE ================= */
.card ul{
  list-style:none;
}

.card li{
  margin:0;
  border-bottom:1px solid var(--rule);
}

.card li:last-child{
  border-bottom:none;
}

/* ================= LIENS ================= */
.card a{
  display:flex;
  align-items:center;
  justify-content:space-between;
  text-decoration:none;
  color:var(--ink);
  font-family:"Inter", sans-serif;
  font-weight:500;
  font-size:15px;
  padding:14px 4px;
  transition:color .2s ease, padding-left .2s ease;
}

.card a::after{
  content:"→";
  color:var(--accent);
  font-size:16px;
  opacity:0;
  transition:opacity .2s ease;
}

.card a:hover{
  color:var(--accent);
  padding-left:8px;
}

.card a:hover::after{
  opacity:1;
}

/* ================= FOOTER ================= */
footer{
  margin-top:40px;
  background:var(--paper);
  color:var(--ink-soft);
  text-align:center;
  padding:28px 20px;
  border-top:1px solid var(--rule);
  font-size:13px;
  letter-spacing:0.5px;
}