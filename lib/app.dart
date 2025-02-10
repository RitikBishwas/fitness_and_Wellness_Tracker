import 'package:flutter/material.dart';
import 'package:fitness/core/theme.dart';
// import 'package:fitness/views/auth/login_screen.dart';
// import 'package:fitness/views/home/home_screen.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fitness App',
      theme: AppTheme.lightTheme,
      // home: const LoginScreen(),
      // routes: {
      //   '/home': (context) => const HomeScreen(),
      // },
    );
  }
}
