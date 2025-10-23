# ⚡ Déploiement Express - 5 Minutes Chrono

**Pour déployer votre site en moins de 5 minutes !**

---

## 🟢 VERCEL (Le plus rapide)

### 1️⃣ Connexion (30 secondes)
- Allez sur **https://vercel.com**
- **Sign Up** → **Continue with GitHub**

### 2️⃣ Import (1 minute)
- **Add New...** → **Project**
- Cherchez **`centre-amine-hijama`**
- Cliquez **Import**

### 3️⃣ Configuration (30 secondes)
- **Framework Preset** : Vite ✅ (auto-détecté)
- **Branch** : `capy/crer-site-web-profes-4b32e13e`
- **Build Command** : `npm run build` (ou `bun run build`)
- **Output Directory** : `dist`

### 4️⃣ Deploy (2-3 minutes)
- Cliquez **Deploy** 🚀
- ☕ Attendez le build...
- ✅ C'est en ligne !

### 5️⃣ Accès
Votre site : `https://centre-amine-hijama.vercel.app`

---

## 🔵 NETLIFY (Alternative)

### 1️⃣ Connexion (30 secondes)
- Allez sur **https://app.netlify.com**
- **Sign up** → **GitHub**

### 2️⃣ Import (1 minute)
- **Add new site** → **Import an existing project**
- **Deploy with GitHub**
- Sélectionnez **`centre-amine-hijama`**

### 3️⃣ Configuration (30 secondes)
- **Branch** : `capy/crer-site-web-profes-4b32e13e`
- **Build command** : `npm run build`
- **Publish directory** : `dist`

### 4️⃣ Deploy (2-4 minutes)
- **Deploy site** 🚀
- ☕ Attendez...
- ✅ C'est en ligne !

### 5️⃣ Accès
Votre site : `https://random-name.netlify.app`

**Renommez** : Site settings → Domain management → Edit site name → `centre-amine-hijama`

---

## ✅ Checklist de Vérification

Après déploiement, testez rapidement :

- [ ] Le site s'affiche
- [ ] Changement de langue FR/AR fonctionne
- [ ] **Carte Google Maps visible** (nouvelle localisation ✅)
- [ ] **Cliquer sur l'adresse ouvre Google Maps**
- [ ] Bouton WhatsApp fonctionne
- [ ] Bouton Téléphone fonctionne
- [ ] Liens Instagram/Facebook fonctionnent
- [ ] Site responsive sur mobile

---

## 🔄 Pour Mettre à Jour Après

```bash
# Faire vos changements
git add .
git commit -m "Update: description"
git push origin capy/crer-site-web-profes-4b32e13e

# Le site se redéploie automatiquement ! 🎉
```

---

## 🌐 Domaine Personnalisé (Bonus)

### Sur Vercel :
1. **Settings** → **Domains** → **Add**
2. Entrez votre domaine : `centreaminehjama.ma`
3. Configurez les DNS selon les instructions

### Sur Netlify :
1. **Domain management** → **Add custom domain**
2. Entrez votre domaine
3. Configurez les DNS

---

## 🆘 Problème ?

### Le build échoue :
```bash
# Testez localement d'abord
bun run build
```

### La carte Google Maps ne s'affiche pas :
- Ouvrez F12 (console) pour voir les erreurs
- Vérifiez votre connexion internet
- Attendez quelques secondes, la carte peut prendre du temps à charger

### Les images ne s'affichent pas :
- Vérifiez que les images sont dans `public/images/`
- Vérifiez qu'elles sont poussées sur GitHub

---

## 📱 C'est Tout !

🎉 **Votre site est en ligne avec la nouvelle localisation Google Maps !**

➡️ Pour plus de détails : Consultez `GUIDE_DEPLOIEMENT_COMPLET.md`

---

*Version : 2.0 - Mise à jour localisation Google Maps*
