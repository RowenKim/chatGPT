package com.chatgpt.service;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

@Service
public class MainService {

    public String chatGPTConnect(String question) throws IOException {
        // APU url 변수 선언
        String url = "https://api.openai.com/v1/completions";

        // 커넥션 선언
        HttpURLConnection con = (HttpURLConnection) new URL(url).openConnection();

        // 커넥션 셋팅
        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        // add your key 에 발급받은 키 입력
        con.setRequestProperty("Authorization", "Bearer Add your key");

        // JSON 객체 생성 후 해당 key 값에 맞는 value 설정
        JSONObject data = new JSONObject();
        data.put("model", "text-davinci-003");
        // 여기 질문 내용이 prompt 이고 이 내용을 기반으로 답변을 받음.
        data.put("prompt", question);
        data.put("max_tokens", 4000);
        data.put("temperature", 1.0);

        con.setDoOutput(true);
        con.getOutputStream().write(data.toString().getBytes());

        String output = new BufferedReader(new InputStreamReader(con.getInputStream())).lines()
                .reduce((a, b) -> a + b).get();

        return new JSONObject(output).getJSONArray("choices").getJSONObject(0).getString("text");
    }
}
