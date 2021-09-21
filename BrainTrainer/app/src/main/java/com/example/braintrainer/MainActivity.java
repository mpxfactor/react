package com.example.braintrainer;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.CountDownTimer;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.Random;

public class MainActivity extends AppCompatActivity {

    TextView questionView;
    TextView timerView, resultView;
    Button goButton;
    int locationOfCorrectAnswer;
    ArrayList<Integer> answers = new ArrayList<Integer>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        timerView = (TextView) findViewById(R.id.timerView);
        resultView = findViewById(R.id.resultView);
        goButton = findViewById(R.id.goButton);

        Button button0 = findViewById(R.id.button0);
        Button button1 = findViewById(R.id.button1);
        Button button2 = findViewById(R.id.button2);
        Button button3 = findViewById(R.id.button3);

        Random rand = new Random();
        int a = rand.nextInt(21);
        int b = rand.nextInt(21);

        questionView = findViewById(R.id.questionView);
        questionView.setText(Integer.toString(a) + " + " + Integer.toString(b));

        locationOfCorrectAnswer = rand.nextInt(4);

        for (int i = 0; i < 4; i++) {
            if (i == locationOfCorrectAnswer) {
                answers.add(a + b);
            } else {
                int wrongAnswer = rand.nextInt(41);

                while (wrongAnswer == a+b) {
                    wrongAnswer = rand.nextInt(41);
                }

                answers.add (wrongAnswer);
            }
        }

        button0.setText(Integer.toString(answers.get(0)));
        button1.setText(Integer.toString(answers.get(1)));
        button2.setText(Integer.toString(answers.get(2)));
        button3.setText(Integer.toString(answers.get(3)));

        new CountDownTimer (31000, 1000) {

            @Override
            public void onTick(long millisUntilFinished) {
                timerView.setText (Long.toString(millisUntilFinished / 1000));
            }

            @Override
            public void onFinish() {
                timerView.setText("finish");
            }
        }.start();
    }

    public void goButton (View view) {
        goButton.setVisibility(View.INVISIBLE);
    }

    public void chooseAnswer (View view) {
        if (Integer.toString(locationOfCorrectAnswer).equals(view.getTag().toString() )){
            resultView.setText("Correct!");
        } else {
            resultView.setText("Wrong :)");
        }
    }


}