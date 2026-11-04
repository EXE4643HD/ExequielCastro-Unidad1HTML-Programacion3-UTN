package ActividadIII;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== USO DE CLASE GENÉRICA CAJA<T> ===");

        // a. Instancia de Caja<String>
        Caja<String> cajaTexto = new Caja<>();
        cajaTexto.guardar("Hola UTN");
        String texto = cajaTexto.obtener(); // No requiere casteo explícito
        System.out.println("Contenido de Caja<String>: " + texto);

        // b. Instancia de Caja<Integer>
        Caja<Integer> cajaNumero = new Caja<>();
        cajaNumero.guardar(2026);
        Integer numero = cajaNumero.obtener(); // Seguridad de tipos en compilación
        System.out.println("Contenido de Caja<Integer>: " + numero);

        System.out.println("\n=== COMPARATIVA: COLECCIONES SIN GENÉRICOS (RAW TYPES) ===");
        
        // Uso de colección sin genéricos (List cruda / Raw Type)
        List listaSinGenericos = new ArrayList();
        listaSinGenericos.add("Texto de prueba");
        listaSinGenericos.add(100); // Permite mezclar cualquier tipo (Object)

        // Problema 1: Requiere casteo explícito al recuperar elementos
        String item0 = (String) listaSinGenericos.get(0);
        System.out.println("Elemento 0 (con casteo): " + item0);

        // Problema 2: Peligro de ClassCastException en tiempo de ejecución (Runtime)
        try {
            // Intentamos castear el entero 100 a String en tiempo de ejecución
            String item1 = (String) listaSinGenericos.get(1); 
        } catch (ClassCastException e) {
            System.out.println("Error detectado en Runtime: " + e.getMessage());
        }
    }
}