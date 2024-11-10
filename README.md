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

### Domain

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

