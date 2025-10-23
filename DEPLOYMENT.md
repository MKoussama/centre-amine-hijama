# 🚀 Guide de Déploiement - Centre Amine Hijama

## ✅ Statut Actuel

Le site web est **entièrement développé** et **prêt pour la production** ! 🎉

Tous les fichiers ont été committés et poussés sur la branche `capy/crer-site-web-profes-4b32e13e`.

## 📋 Prochaines Étapes

### Option 1 : Merger sur GitHub (Recommandé)

1. Allez sur https://github.com/MKoussama/centre-amine-hijama
2. Vous verrez un message "capy/crer-site-web-profes-4b32e13e had recent pushes"
3. Cliquez sur "Compare & pull request"
4. Vérifiez les changements et créez la Pull Request
5. Mergez la PR vers `main`

### Option 2 : Définir comme Branche Principale

Si c'est votre premier déploiement, vous pouvez définir `capy/crer-site-web-profes-4b32e13e` comme branche par défaut :

1. Allez dans **Settings** > **Branches**
2. Changez la branche par défaut vers `capy/crer-site-web-profes-4b32e13e`
3. Le site sera déployé automatiquement si vous utilisez Vercel/Netlify

### Option 3 : Merger Localement

```bash
git checkout main
git merge capy/crer-site-web-profes-4b32e13e
# Note: Vous devrez merger via l'interface GitHub car push direct vers main est bloqué
```

## 🌐 Déploiement sur Vercel (Recommandé)

### Étapes :

1. Allez sur https://vercel.com
2. Cliquez sur "Import Project"
3. Importez `MKoussama/centre-amine-hijama` depuis GitHub
4. Configuration automatique détectée (Vite)
5. Cliquez sur "Deploy"

### Configuration Vercel :
- **Framework Preset**: Vite
- **Build Command**: `bun run build` (ou `npm run build`)
- **Output Directory**: `dist`
- **Install Command**: `bun install` (ou `npm install`)

✨ Votre site sera accessible sur `https://centre-amine-hijama.vercel.app` (ou domaine personnalisé)

## 🚀 Déploiement sur Netlify

### Étapes :

1. Allez sur https://netlify.com
2. Cliquez sur "Add new site" > "Import an existing project"
3. Connectez GitHub et sélectionnez `MKoussama/centre-amine-hijama`
4. Configuration :
   - **Build command**: `bun run build` (ou `npm run build`)
   - **Publish directory**: `dist`
5. Cliquez sur "Deploy site"

## 📱 Test en Local

Avant de déployer, vous pouvez tester le site :

```bash
# Installer les dépendances
bun install

# Lancer le serveur de développement
bun run dev
# Accédez à http://localhost:5173

# Tester le build de production
bun run build
bun run preview
# Accédez à http://localhost:4173
```

## 🔧 Configuration Domaine Personnalisé

### Sur Vercel :
1. Settings > Domains
2. Ajoutez votre domaine (ex: `centreaminehjama.ma`)
3. Suivez les instructions pour configurer les DNS

### Sur Netlify :
1. Domain settings > Add custom domain
2. Ajoutez votre domaine
3. Configurez les DNS selon les instructions

## 📊 Contenu Déployé

✅ **7 Sections Complètes**:
- Header avec navigation multilingue
- Section Hero avec CTAs
- Section Femmes dédiée
- 5 Services détaillés avec tarifs
- 6 Raisons de choisir le centre
- Contact avec Google Maps
- Footer avec liens sociaux

✅ **Fonctionnalités**:
- Support FR/AR avec RTL
- Responsive mobile-first
- Boutons flottants WhatsApp
- Smooth scroll
- localStorage pour langue
- Toutes les images incluses

✅ **Intégrations**:
- WhatsApp: https://api.whatsapp.com/send?phone=%2B212695933607
- Instagram: @centre.amine.hijama
- Facebook: Page officielle
- Google Maps: Localisation exacte
- Email: centre.amine.hijama@gmail.com
- Téléphone: 0695933607

## 🎨 Personnalisation Future

Si vous voulez modifier le contenu :

1. **Textes** : Modifiez `src/lib/translations.ts`
2. **Couleurs** : Modifiez `tailwind.config.js`
3. **Images** : Remplacez dans `public/images/`
4. **Services/Tarifs** : Modifiez `src/lib/translations.ts`
5. **Liens sociaux** : Modifiez `src/lib/translations.ts` (socialLinks)

Après modification :
```bash
git add .
git commit -m "Update: description du changement"
git push origin capy/crer-site-web-profes-4b32e13e
```

Le site se redéploiera automatiquement !

## ✨ Performance

Build optimisé :
- JS: ~69KB gzipped
- CSS: ~4KB gzipped
- Images: Optimisées PNG
- Temps de chargement: < 2s

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifiez que toutes les dépendances sont installées : `bun install`
2. Vérifiez que le build fonctionne : `bun run build`
3. Consultez les logs de déploiement sur Vercel/Netlify
4. Vérifiez la configuration du domaine DNS (si applicable)

## 📞 Prochaines Améliorations Possibles

- Système de réservation en ligne intégré
- Blog pour articles de santé
- Témoignages clients
- Galerie photos avant/après
- Chat en direct WhatsApp
- Google Analytics pour tracking
- Formulaire de contact avec backend

---

🎉 **Félicitations ! Votre site est prêt à être déployé !**

Pour toute question, consultez le README.md principal.
