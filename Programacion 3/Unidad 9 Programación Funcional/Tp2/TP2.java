import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.OptionalDouble;
import java.util.TreeMap;
import java.util.stream.Collectors;

public class TP2 {
    private static final class Producto {
        private final String nombre;
        private final String categoria;
        private final double precio;
        private final int stock;

        Producto(String nombre, String categoria, double precio, int stock) {
            this.nombre = nombre;
            this.categoria = categoria;
            this.precio = precio;
            this.stock = stock;
        }

        String getCategoria() {
            return categoria;
        }

        double getPrecio() {
            return precio;
        }

        int getStock() {
            return stock;
        }

        @Override
        public String toString() {
            return String.format(Locale.ROOT, "%s ($%.2f)", nombre, precio);
        }
    }

    public static void main(String[] args) {
        List<Producto> productos = Arrays.asList(
                new Producto("Teclado", "Informatica", 180, 8),
                new Producto("Mouse", "Informatica", 95, 15),
                new Producto("Monitor", "Informatica", 450, 4),
                new Producto("Cuaderno", "Libreria", 80, 20),
                new Producto("Carpeta", "Libreria", 120, 10),
                new Producto("Agenda", "Libreria", 100, 6)
        );

        // 1. Productos con precio estrictamente mayor a 100, del mas caro al mas barato.
        List<Producto> caros = productos.stream()
                .filter(producto -> producto.getPrecio() > 100)
                .sorted(Comparator.comparingDouble(Producto::getPrecio).reversed())
                .collect(Collectors.toList());
        System.out.println("Productos con precio mayor a 100: " + caros);

        // 2. Stock total por categoria.
        Map<String, Integer> stockPorCategoria = productos.stream()
                .collect(Collectors.groupingBy(Producto::getCategoria, TreeMap::new,
                        Collectors.summingInt(Producto::getStock)));
        System.out.println("Stock total por categoria: " + stockPorCategoria);

        // 3. Nombre y precio de cada producto en un solo String.
        String reporte = productos.stream()
                .map(Producto::toString)
                .collect(Collectors.joining(";"));
        System.out.println("Reporte de productos: " + reporte);

        // 4. Precio promedio general y por categoria.
        OptionalDouble promedioGeneral = productos.stream()
                .mapToDouble(Producto::getPrecio)
                .average();
        if (promedioGeneral.isPresent()) {
            System.out.printf(Locale.ROOT, "Precio promedio general: $%.2f%n",
                    promedioGeneral.getAsDouble());
        } else {
            System.out.println("Precio promedio general: sin productos");
        }

        Map<String, Double> promedioPorCategoria = productos.stream()
                .collect(Collectors.groupingBy(Producto::getCategoria, TreeMap::new,
                        Collectors.averagingDouble(Producto::getPrecio)));
        System.out.println("Precio promedio por categoria:");
        promedioPorCategoria.forEach((categoria, promedio) ->
                System.out.printf(Locale.ROOT, "%s: $%.2f%n", categoria, promedio));
    }
}
