import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

const Quiz: React.FC = () => {
  const questions = [
    {
      question: "Como é seu cabelo ?",
      options: ["Cresco", "Ondulado", "Liso", "Cacheado"],
    },
    {
      question: "Qual tipo de Problema você sofre ?",
      options: ["Queda de cabelo/barba", "Cabelo ressecado", "Barba ressecado", "Cabelo quebrado", "Barba Falhada"],
    },
    {
      question: "",
      options: ["", "I", "", ""],
    },
    {
      question: "",
      options: ["", "", "", ""],
    },
    {
      question: "",
      options: ["", "", "", ""],
    },
  ];

  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));

  const handleSelect = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  return (
    <ScrollView style={{ padding: 16 }}>

      {questions.map((q, index) => (
        <View key={index} style={{ marginBottom: 12 }}>
          <Text style={{ fontWeight: "600", marginBottom: 8 }}>{q.question}</Text>
          {q.options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => handleSelect(index, option)}
              style={{
                padding: 10,
                backgroundColor: answers[index] === option ? "#007bff" : "#ccc",
                marginVertical: 4,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: answers[index] === option ? "#fff" : "#000" }}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <TouchableOpacity
        style={{
          marginTop: 16,
          padding: 12,
          backgroundColor: "#28a745",
          borderRadius: 5,
          alignItems: "center",
        }}
        onPress={() => console.log(answers)}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Enviar Respostas</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Quiz;
