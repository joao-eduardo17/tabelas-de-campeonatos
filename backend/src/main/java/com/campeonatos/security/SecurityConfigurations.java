package com.campeonatos.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {
    @Autowired
    SecurityFilter securityFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(HttpMethod.POST, "/auth/*").permitAll()
                        .requestMatchers(HttpMethod.GET, "/tabela/tabelas").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/tabela/tabelaId").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/usuario/usuarios").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/usuario/usuarioId").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.POST, "/usuario/*").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.PUT, "/usuario/*").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/usuario/*").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/perfil/perfis").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/perfil/perfilId").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/campeonato/campeonatos").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/campeonato/campeonatoId").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/rodada/rodadas").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/rodada/rodadaId").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/partida/partidas").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/partida/partidaId").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/clube/clubes").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.PUT, "/clube/*").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/clube/*").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/estatistica/estatisticas").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/estatistica/estatisticaByCampeonatoId").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/estatistica/estatisticaId").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.POST, "/estatistica/*").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.PUT, "/estatistica/*").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/estatistica/*").hasRole("ADMIN")
                        .anyRequest().authenticated()
                )
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
