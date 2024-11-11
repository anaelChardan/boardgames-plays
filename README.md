## Architecture Logiciel

### Pré-requis

Please install:

- [volta](https://volta.sh/)
- [docker](https://docs.docker.com/desktop/)

### Installation

```sh
make install
```

## Goal

On veut pouvoir enregistrer des parties en étant sûr de rentrer le bon nombre de joueur.

Par exemple enregistrer une partie de [Brass Birmingham](https://boardgamegeek.com/boardgame/224517/brass-birmingham)

Nous pouvons utiliser l'API de boardgamegeek pour retrouver ces informations.

## Steps

1. Domain

On a la notion de:

- Jeu de plateau

```ts
{
 type Boardgame = {
  name: string;
  bggId: string;
  maxNumberOfPlayers: number;
  minNumberOfPlayers: number;
};
```

- Partie

```ts
export type Play = {
  boardgameName: string;
  bggId: string;
  players: string[];
};
```

2. On veut pouvoir enregistrer une partie en intéragissant avec notre domain

a) Définissons le port primaire (ou use case) ensemble!

```ts
type PlayAGame = {
  forBoardgame: (boardgameName: string, players: string[]) => Play;
};
```

Notes: on ne doit dépendre uniquement que d'objets du domain.

b) Passons à l'implémentation

On doit pouvoir:

- retrouver le jeu (attention, comment-est ce que l'on interagit avec bgg) -> comme c'est de l'infrastructure on doit faire de l'injection de dépendance. ;) 
- vérifier le nombre de joueur
- enregistrer la partie

Revérifions notre test functionnel

- nous avons besoin d'un stub pour notre port secondaire

### Http

Fast forward to branch 2_controller

1. On écrit d'abord le test (/play)
2. On écrit le controller (zod etc...)