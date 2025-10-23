# 🚀 Guide Complet de Déploiement - Centre Amine Hijama

**Mise à jour:** Octobre 2025  
**Statut:** ✅ Site prêt pour la production avec la nouvelle localisation Google Maps

---

## 📍 Dernières Modifications

✅ **Localisation Google Maps mise à jour** (23 octobre 2025)
- Nouvelles coordonnées: `33.5476603, -7.5999447`
- Lien Google Maps complet intégré
- Carte iframe mise à jour dans la section Contact
- Tous les liens cliquables fonctionnels

---

## 🎯 Vue d'Ensemble

Ce guide vous accompagne étape par étape pour déployer votre site web sur **Vercel** ou **Netlify**. Les deux plateformes offrent :

- ✅ Déploiement gratuit
- ✅ HTTPS automatique
- ✅ Déploiements automatiques à chaque push
- ✅ Domaine personnalisé gratuit
- ✅ CDN global pour performance optimale

---

## 📋 Pré-requis

Avant de commencer, assurez-vous que :

- [x] Votre code est sur GitHub (`MKoussama/centre-amine-hijama`)
- [x] La branche `capy/crer-site-web-profes-4b32e13e` contient les dernières modifications
- [x] Vous avez un compte GitHub actif
- [x] Les coordonnées Google Maps sont à jour ✅

---

# 🟢 Option 1 : Déploiement sur Vercel (Recommandé)

Vercel est recommandé car il est optimisé pour les projets Vite/React et offre une configuration zéro.

## Étape 1 : Créer un Compte Vercel

1. Allez sur **https://vercel.com**
2. Cliquez sur **"Sign Up"**
3. Choisissez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre compte GitHub

## Étape 2 : Importer le Projet

1. Sur le dashboard Vercel, cliquez sur **"Add New..."** → **"Project"**
2. Dans la liste des repositories, cherchez **`centre-amine-hijama`**
3. Cliquez sur **"Import"** à côté du repository

## Étape 3 : Configurer le Projet

Vercel détecte automatiquement que c'est un projet Vite. Vérifiez la configuration :

### Configuration Détectée :

| Paramètre | Valeur |
|-----------|--------|
| **Framework Preset** | Vite |
| **Root Directory** | `./` (laisser par défaut) |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

### ⚠️ Important : Si vous utilisez Bun

Si votre projet utilise **Bun** au lieu de npm, modifiez :

- **Install Command**: `bun install`
- **Build Command**: `bun run build`

### Sélection de la Branche

- **Branch to deploy**: `capy/crer-site-web-profes-4b32e13e`

## Étape 4 : Déployer

1. Cliquez sur **"Deploy"**
2. Vercel va :
   - Installer les dépendances
   - Builder le projet
   - Déployer sur CDN global
3. ⏱️ Durée : 2-3 minutes

## Étape 5 : Accéder au Site

Une fois le déploiement terminé :

1. Vercel affiche l'URL de votre site : `https://centre-amine-hijama.vercel.app`
2. Cliquez sur **"Visit"** pour voir votre site en ligne
3. Testez tous les liens et la carte Google Maps

## Étape 6 : Configuration Domaine Personnalisé (Optionnel)

### Pour ajouter votre propre domaine (ex: `centreaminehjama.ma`) :

1. Dans Vercel, allez dans **Settings** → **Domains**
2. Cliquez sur **"Add"**
3. Entrez votre domaine : `centreaminehjama.ma`
4. Vercel vous donne les enregistrements DNS à configurer

### Configuration DNS chez votre registrar :

#### Option A : Domaine principal (centreaminehjama.ma)

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

#### Option B : Sous-domaine (www.centreaminehjama.ma)

| Type | Name | Value |
|------|------|-------|
| CNAME | www | cname.vercel-dns.com |

### Vérification :

- Attendez 5-10 minutes pour la propagation DNS
- Vercel vérifie automatiquement et active HTTPS
- Votre site sera accessible sur votre domaine personnalisé

---

# 🔵 Option 2 : Déploiement sur Netlify

Netlify est une alternative excellente avec une interface très intuitive.

## Étape 1 : Créer un Compte Netlify

1. Allez sur **https://app.netlify.com**
2. Cliquez sur **"Sign up"**
3. Choisissez **"GitHub"**
4. Autorisez Netlify à accéder à votre compte GitHub

## Étape 2 : Importer le Projet

1. Sur le dashboard, cliquez sur **"Add new site"** → **"Import an existing project"**
2. Cliquez sur **"Deploy with GitHub"**
3. Autorisez Netlify si demandé
4. Cherchez et sélectionnez **`MKoussama/centre-amine-hijama`**

## Étape 3 : Configurer le Build

### Configuration à renseigner :

| Paramètre | Valeur |
|-----------|--------|
| **Branch to deploy** | `capy/crer-site-web-profes-4b32e13e` |
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |
| **Base directory** | (laisser vide) |

### ⚠️ Si vous utilisez Bun :

- **Build command**: `bun run build`

### Variables d'environnement (optionnel) :

Aucune variable nécessaire pour ce projet.

## Étape 4 : Déployer

1. Cliquez sur **"Deploy [nom-du-site]"**
2. Netlify va :
   - Cloner le repository
   - Installer les dépendances
   - Builder le projet
   - Déployer sur CDN
3. ⏱️ Durée : 2-4 minutes

## Étape 5 : Accéder au Site

Une fois déployé :

1. Netlify génère une URL : `https://random-name-123456.netlify.app`
2. Cliquez sur l'URL pour accéder au site
3. Testez la carte Google Maps et tous les liens

## Étape 6 : Personnaliser le Nom (Optionnel)

1. Allez dans **Site settings** → **Domain management**
2. Cliquez sur **"Options"** → **"Edit site name"**
3. Changez en : `centre-amine-hijama`
4. Votre site sera accessible sur : `https://centre-amine-hijama.netlify.app`

## Étape 7 : Domaine Personnalisé (Optionnel)

1. Dans **Domain management**, cliquez sur **"Add custom domain"**
2. Entrez votre domaine : `centreaminehjama.ma`
3. Suivez les instructions pour configurer les DNS

### Configuration DNS :

#### Pour un domaine principal :

| Type | Name | Value |
|------|------|-------|
| A | @ | 75.2.60.5 |
| CNAME | www | [votre-site].netlify.app |

#### Pour www uniquement :

| Type | Name | Value |
|------|------|-------|
| CNAME | www | [votre-site].netlify.app |

---

# 🔄 Déploiements Automatiques

## Comment ça marche ?

Une fois configuré, **chaque fois que vous pushez sur la branche déployée**, Vercel/Netlify redéploie automatiquement votre site !

### Exemple de workflow :

```bash
# 1. Faire des modifications localement
cd /path/to/centre-amine-hijama

# 2. Tester localement
bun run dev

# 3. Committer et pusher
git add .
git commit -m "Update: description des changements"
git push origin capy/crer-site-web-profes-4b32e13e

# 4. Le site se redéploie automatiquement !
```

### Notifications de déploiement :

- **Vercel** : Vous recevez un email à chaque déploiement
- **Netlify** : Notifications par email et sur le dashboard

---

# ✅ Vérifications Post-Déploiement

Après le déploiement, testez ces éléments essentiels :

## 1. Navigation Générale

- [ ] Le site s'affiche correctement sur desktop
- [ ] Le site s'affiche correctement sur mobile
- [ ] Le menu de navigation fonctionne
- [ ] Le bouton de changement de langue FR/AR fonctionne
- [ ] Les liens du menu scroll vers les bonnes sections

## 2. Section Hero

- [ ] Le bouton "Réservez votre séance" ouvre WhatsApp
- [ ] Le bouton "Appelez maintenant" compose le numéro de téléphone
- [ ] Les informations de contact sont affichées

## 3. Section Contact & Google Maps ⭐

- [ ] **La carte Google Maps s'affiche correctement**
- [ ] **La carte pointe vers 33.5476603, -7.5999447**
- [ ] Cliquer sur la boîte d'adresse ouvre Google Maps dans un nouvel onglet
- [ ] Le bouton "Ouvrir dans Google Maps" fonctionne
- [ ] Le lien Google Maps dans le footer fonctionne
- [ ] L'adresse affichée est : 206, 212 Bd de Témara, Casablanca, Maroc

## 4. Liens Externes

- [ ] Le bouton WhatsApp flottant fonctionne
- [ ] Le lien Instagram fonctionne
- [ ] Le lien Facebook fonctionne
- [ ] Le lien Email ouvre le client mail

## 5. Performance

- [ ] Le site se charge en moins de 3 secondes
- [ ] Les images se chargent correctement
- [ ] Pas d'erreurs dans la console du navigateur (F12)

---

# 🧪 Test en Local Avant Déploiement

Pour éviter les surprises, testez toujours en local avant de déployer :

## 1. Installer les Dépendances

```bash
cd /project/workspace/MKoussama/centre-amine-hijama
bun install
```

## 2. Lancer le Serveur de Développement

```bash
bun run dev
```

Accédez à : **http://localhost:5173**

## 3. Tester le Build de Production

```bash
# Builder le projet
bun run build

# Vérifier qu'il n'y a pas d'erreurs de build
# Le dossier dist/ doit être créé

# Preview du build
bun run preview
```

Accédez à : **http://localhost:4173**

## 4. Vérifier la Carte Google Maps

Dans votre navigateur :
1. Allez à la section Contact
2. Vérifiez que la carte s'affiche
3. Vérifiez que la localisation est correcte (33.5476603, -7.5999447)
4. Cliquez sur "Ouvrir dans Google Maps" et vérifiez que le lien est correct

---

# 🔧 Résolution de Problèmes

## Problème : Le build échoue sur Vercel/Netlify

### Solution 1 : Vérifier les dépendances

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules
bun install
bun run build
```

### Solution 2 : Vérifier la version de Node.js

Sur Vercel/Netlify, ajoutez un fichier `.nvmrc` à la racine :

```bash
echo "20" > .nvmrc
git add .nvmrc
git commit -m "Add Node.js version"
git push
```

## Problème : La carte Google Maps ne s'affiche pas

### Vérifications :

1. **Console du navigateur** : Ouvrez F12 et vérifiez s'il y a des erreurs
2. **URL de l'iframe** : Vérifiez que l'URL contient les bonnes coordonnées
3. **Connexion internet** : La carte nécessite une connexion active

### URL correcte dans Contact.tsx :

```typescript
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8!2d-7.5999447!3d33.5476603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd44d267b725:0x8788c15fcf17eb45!2sCentre%20amine%20hijama%20Casablanca!5e0!3m2!1sfr!2sma!4v1729680000000"
```

## Problème : Les images ne s'affichent pas

### Vérification :

1. Les images doivent être dans `public/images/`
2. Les chemins dans le code doivent être : `/images/nom-fichier.png`
3. Vérifiez que les images sont committées sur GitHub

## Problème : Le domaine personnalisé ne fonctionne pas

### Vérifications :

1. **Propagation DNS** : Attendez 24-48h maximum
2. **Configuration DNS** : Vérifiez les enregistrements chez votre registrar
3. **HTTPS** : Vercel/Netlify génère automatiquement le certificat SSL

### Test de propagation DNS :

```bash
# Tester la résolution DNS
nslookup centreaminehjama.ma

# Ou utilisez https://dnschecker.org
```

---

# 📊 Monitoring et Analytics

## Google Analytics (Optionnel)

Pour suivre les visites sur votre site :

1. Créez un compte Google Analytics
2. Obtenez votre ID de tracking (ex: `G-XXXXXXXXXX`)
3. Ajoutez dans `index.html` avant `</head>` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Vercel Analytics

Vercel offre des analytics intégrés :

1. Dans Vercel Dashboard → **Analytics**
2. Cliquez sur **"Enable Analytics"**
3. Gratuit jusqu'à 2500 visiteurs/mois

---

# 🔐 Sécurité et Performance

## HTTPS

- ✅ **Automatique** sur Vercel et Netlify
- ✅ Certificat SSL renouvelé automatiquement

## Headers de Sécurité

Les deux plateformes configurent automatiquement :
- X-Frame-Options
- X-Content-Type-Options
- Strict-Transport-Security

## Performance

Optimisations automatiques :
- ✅ Compression Gzip/Brotli
- ✅ CDN global (edge network)
- ✅ Cache optimisé
- ✅ HTTP/2 et HTTP/3

---

# 📱 Partage et Promotion

Une fois déployé, partagez votre site :

## QR Code

Générez un QR Code pointant vers votre site :
- https://qr-code-generator.com
- Imprimez-le pour votre centre

## Réseaux Sociaux

Partagez sur :
- Instagram Stories
- Facebook Page
- WhatsApp Status
- Google My Business

## Bio Instagram

Ajoutez le lien dans votre bio Instagram :
```
🌿 Centre de Hijama Casablanca
📍 206 Bd de Témara
🔗 centreaminehjama.ma
```

---

# 🎯 Prochaines Étapes

Après le déploiement, vous pouvez :

1. **Ajouter un système de réservation en ligne**
   - Calendly
   - Google Forms
   - WhatsApp Business API

2. **Créer un blog**
   - Articles sur la hijama
   - Conseils santé
   - Témoignages clients

3. **Ajouter des témoignages**
   - Section dédiée
   - Étoiles et avis
   - Photos avant/après

4. **Optimiser le SEO**
   - Google Search Console
   - Sitemap XML
   - Meta descriptions

5. **Marketing Digital**
   - Google Ads
   - Facebook Ads
   - Instagram Ads

---

# 📞 Support et Contact

Si vous avez besoin d'aide :

1. **Documentation Vercel** : https://vercel.com/docs
2. **Documentation Netlify** : https://docs.netlify.com
3. **Support GitHub** : https://support.github.com

---

# ✨ Conclusion

🎉 **Félicitations !** Votre site Centre Amine Hijama est maintenant prêt à être déployé avec :

- ✅ Nouvelle localisation Google Maps (33.5476603, -7.5999447)
- ✅ Interface moderne et professionnelle
- ✅ Support français et arabe
- ✅ Responsive mobile et desktop
- ✅ Intégrations WhatsApp, Instagram, Facebook
- ✅ Performance optimale

**Le déploiement prend moins de 5 minutes et votre site sera en ligne !**

---

*Dernière mise à jour : 23 octobre 2025*  
*Version : 2.0 - Avec nouvelle localisation Google Maps*
