package com.chatgpt.controller;

import com.chatgpt.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Controller
public class MainController {

    @Autowired
    MainService mainService;

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String main(){
        return "chatGPT/main";
    }


    @PostMapping("connectChatGPT")
    public @ResponseBody String chatGPTConnect(@RequestParam(name = "question") String question) throws IOException {
        String Msg = mainService.chatGPTConnect(question);
        return Msg;
    }
}
