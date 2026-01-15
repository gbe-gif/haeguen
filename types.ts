import React from 'react';

export interface NavItem {
  label: string;
  id: string;
}

export interface CharacterTrait {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface NPC {
  name: string;
  relation: string;
  description: string;
  traits: string[];
}