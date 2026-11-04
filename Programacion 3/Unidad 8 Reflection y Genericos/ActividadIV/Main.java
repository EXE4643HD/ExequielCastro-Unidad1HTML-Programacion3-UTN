package ActividadIV;

import java.util.ArrayList;
import java.util.List;

public class Main {

    // Método genérico parametrizado con el tipo T
    public static <T> void imprimirLista(List<T> lista) {
        System.out.println("--- Contenido de la lista ---");
        for (T elemento : lista) {
            System.out.println("- " + elemento);
        }
    }

    public static void main(String[] args) {
        // 1. Crear e imprimir lista de Enteros (List<Integer>)
        List<Integer> listaEnteros = new ArrayList<>();
        listaEnteros.add(10);
        listaEnteros.add(20);
        listaEnteros.add(30);

        System.out.println("=== LISTA DE ENTEROS ===");
        imprimirLista(listaEnteros);

        // 2. Crear e imprimir lista de Cadenas (List<String>)
        List<String> listaCadenas = new ArrayList<>();
        listaCadenas.add("Java");
        listaCadenas.add("Programación III");
        listaCadenas.add("UTN");

        System.out.println("\n=== LISTA DE CADENAS ===");
        imprimirLista(listaCadenas);
    }
}