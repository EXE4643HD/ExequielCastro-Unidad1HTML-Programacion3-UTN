import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.OptionalDouble;
import java.util.TreeMap;
import java.util.stream.Collectors;

public class TP1 {
    private static final class Alumno {
        private final String nombre;
        private final double nota;
        private final String curso;

        Alumno(String nombre, double nota, String curso) {
            this.nombre = nombre;
            this.nota = nota;
            this.curso = curso;
        }

        double getNota() {
            return nota;
        }

        String getCurso() {
            return curso;
        }

        @Override
        public String toString() {
            return nombre + " (" + nota + ")";
        }
    }

    public static void main(String[] args) {
        List<Alumno> alumnos = Arrays.asList(
                new Alumno("Lucia", 9.5, "A"),
                new Alumno("Mateo", 6, "B"),
                new Alumno("Ana", 7, "A"),
                new Alumno("Bruno", 8, "B"),
                new Alumno("Sofia", 10, "A"),
                new Alumno("Diego", 5, "B")
        );

        // 1. Nombres de aprobados en mayusculas y orden alfabetico.
        List<String> aprobados = alumnos.stream()
                .filter(alumno -> alumno.getNota() >= 7)
                .map(alumno -> alumno.nombre.toUpperCase(Locale.ROOT))
                .sorted()
                .collect(Collectors.toList());
        System.out.println("Aprobados: " + aprobados);

        // 2. Promedio general de notas.
        OptionalDouble promedio = alumnos.stream()
                .mapToDouble(Alumno::getNota)
                .average();
        if (promedio.isPresent()) {
            System.out.printf(Locale.ROOT, "Promedio general: %.2f%n", promedio.getAsDouble());
        } else {
            System.out.println("Promedio general: sin alumnos");
        }

        // 3. Agrupacion por curso, con las claves ordenadas para mostrar el resultado.
        Map<String, List<Alumno>> porCurso = alumnos.stream()
                .collect(Collectors.groupingBy(Alumno::getCurso, TreeMap::new, Collectors.toList()));
        System.out.println("Alumnos por curso: " + porCurso);

        // 4. Tres mejores promedios individuales. Cada alumno tiene una sola nota.
        List<Alumno> mejores = alumnos.stream()
                .sorted(Comparator.comparingDouble(Alumno::getNota).reversed())
                .limit(3)
                .collect(Collectors.toList());
        System.out.println("Tres mejores promedios: " + mejores);
    }
}
