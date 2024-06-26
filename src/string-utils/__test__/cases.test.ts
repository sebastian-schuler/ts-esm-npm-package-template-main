import { describe, expect, it } from 'vitest';
import { toCamelCase } from '../to-camel-case.js';
import { toDotCase } from '../to-dot-case.js';
import { toHeaderCase } from '../to-header-case.js';
import { toKebabCase } from '../to-kebab-case.js';
import { toPascalCase } from '../to-pascal-case.js';
import { toSnakeCase } from '../to-snake-case.js';

describe('String conversion functions', () => {
  describe('toCamelCase function', () => {
    it('converts simple sentences', () => {
      expect(toCamelCase('hello world')).toBe('helloWorld');
    });
    it('handles single words', () => {
      expect(toCamelCase('world')).toBe('world');
    });
    it('handles empty strings', () => {
      expect(toCamelCase('')).toBe('');
    });
    it('handles special characters', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld');
    });
    it('handle scrambled data', () => {
      expect(toCamelCase('adaio.asd.a:D:')).toBe('adaioAsdAD');
    });
  });

  describe('toDotCase function', () => {
    it('converts simple sentences', () => {
      expect(toDotCase('hello world')).toBe('hello.world');
    });
    it('handles single words', () => {
      expect(toDotCase('world')).toBe('world');
    });
    it('handles empty strings', () => {
      expect(toDotCase('')).toBe('');
    });
    it('handles special characters', () => {
      expect(toDotCase('hello-world')).toBe('hello.world');
    });
    it('handle scrambled data', () => {
      expect(toDotCase('adaio.asd.a:D:')).toBe('adaio.asd.a.d');
    });
  });

  describe('toHeaderCase function', () => {
    it('converts simple sentences', () => {
      expect(toHeaderCase('hello world')).toBe('Hello World');
    });
    it('handles single words', () => {
      expect(toHeaderCase('world')).toBe('World');
    });
    it('handles empty strings', () => {
      expect(toHeaderCase('')).toBe('');
    });
    it('handles special characters', () => {
      expect(toHeaderCase('hello-world')).toBe('Hello World');
    });
    it('handle scrambled data', () => {
      expect(toHeaderCase('adaio.asd.a:D:')).toBe('Adaio Asd A D');
    });
  });

  describe('toKebabCase function', () => {
    it('converts simple sentences', () => {
      expect(toKebabCase('hello world')).toBe('hello-world');
    });
    it('handles single words', () => {
      expect(toKebabCase('world')).toBe('world');
    });
    it('handles empty strings', () => {
      expect(toKebabCase('')).toBe('');
    });
    it('handles special characters', () => {
      expect(toKebabCase('hello_world')).toBe('hello-world');
    });
    it('handle scrambled data', () => {
      expect(toKebabCase('adaio.asd.a:D:')).toBe('adaio-asd-a-d');
    });
  });

  describe('toPascalCase function', () => {
    it('converts simple sentences', () => {
      expect(toPascalCase('hello world')).toBe('HelloWorld');
    });
    it('handles single words', () => {
      expect(toPascalCase('world')).toBe('World');
    });
    it('handles empty strings', () => {
      expect(toPascalCase('')).toBe('');
    });
    it('handles special characters', () => {
      expect(toPascalCase('hello-world')).toBe('HelloWorld');
    });
    it('handle scrambled data', () => {
      expect(toPascalCase('adaio.asd.a:D:')).toBe('AdaioAsdAD');
    });
  });

  describe('toSnakeCase function', () => {
    it('converts simple sentences', () => {
      expect(toSnakeCase('hello world')).toBe('hello_world');
    });
    it('handles single words', () => {
      expect(toSnakeCase('world')).toBe('world');
    });
    it('handles empty strings', () => {
      expect(toSnakeCase('')).toBe('');
    });
    it('handles special characters', () => {
      expect(toSnakeCase('hello-world')).toBe('hello_world');
    });
    it('handle scrambled data', () => {
      expect(toSnakeCase('adaio.asd.a:D:')).toBe('adaio_asd_a_d');
    });
  });
});
