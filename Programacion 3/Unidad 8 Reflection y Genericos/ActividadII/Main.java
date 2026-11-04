package ActividadII;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

public class Main {
    public static void main(String[] args) {
        try {
            // Se obtiene la clase Persona dinámicamente
            Class<?> clazz = Persona.class;

            // a. Obtener e imprimir sus constructores
            System.out.println("=== Constructores de Persona ===");
            Constructor<?>[] constructores = clazz.getDeclaredConstructors();
            for (Constructor<?> c : constructores) {
                System.out.println(c);
            }

            // b. Instanciar un objeto utilizando Reflection
            Constructor<?> constructorParametrizado = clazz.getConstructor(String.class, int.class);
            Object personaObj = constructorParametrizado.newInstance("Carlos", 25);

            // c. Modificar el valor del atributo privado 'nombre' en tiempo de ejecución
            Field campoNombre = clazz.getDeclaredField("nombre");
            campoNombre.setAccessible(true); // Rompe el encapsulamiento para acceder al campo privado
            campoNombre.set(personaObj, "Martín"); // Se asigna el nuevo valor

            // d. Invocación del método para mostrar la información
            Method metodoSaludar = clazz.getDeclaredMethod("saludar");
            Object resultado = metodoSaludar.invoke(personaObj);
            System.out.println("\n=== Resultado del método saludar() ===");
            System.out.println(resultado);

            // e. Inspeccionar y modificar dinámicamente el nivel de acceso/encapsulamiento
            System.out.println("\n=== Modificadores de acceso ===");
            System.out.println("¿Es privado originalmente el método? " + Modifier.isPrivate(metodoSaludar.getModifiers()));

            // Se remueve el acceso dinámico
            metodoSaludar.setAccessible(false);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}