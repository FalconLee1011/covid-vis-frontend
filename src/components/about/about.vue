<template>
  <v-container fluid max-width="90%">
    <v-card>
      <v-card-title primary-title> OPERATION STATISTICS </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <datePad
              title="System initialized for"
              :subtitles="['系統已啟動', '系統啟動自']"
            ></datePad>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row>
              <v-col>
                <v-card elevation-10>
                  <v-card-title primary-title> 關於 </v-card-title>
                  <v-card-text>
                    <h2>關於這個專案</h2>
                    <v-divider class="my-2"></v-divider>
                    <p>
                      原來是 https://xtl.tw/covid-map（不用想了連結不存在。）<br>
                      後來 GCP到期不想花錢，而且也沒人看，還不如架在自己的PC上面。
                    </p>
                    <p>
                      這個版本起始於 2021年 01月 17日
                      的半夜，喝了一些酒不知道要幹嘛就開始寫了
                    </p>
                    <p>
                      與舊版不同之處在於除了地圖之外<br>
                      新增了一個 Dashboard、還有很酷的介面<br>
                      跟一堆過了半年多還沒完成的 feature
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col>
                <v-card>
                  <v-card-title primary-title> 草 </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <v-list>
                          <v-list-item style="color: #aaa !important;">
                            安安我是草
                          </v-list-item>
                          <v-list-item style="color: #aaa !important;">
                            <a href="https://xtl.tw" target="_blank">https://xtl.tw/</a>
                          </v-list-item>
                          <v-list-item style="color: #aaa !important;">
                            性別：[REDACTED]
                          </v-list-item>
                          <v-list-item style="color: #aaa !important;">
                            年齡：[REDACTED]
                          </v-list-item>
                          <v-list-item style="color: #aaa !important;">
                            專長：[REDACTED]
                          </v-list-item>
                          <v-list-item style="color: #aaa !important;">
                            關於：[REDACTED]
                          </v-list-item>
                        </v-list>
                      </v-col>
                      <v-col cols=5>
                        <v-img src="@/assets/profile_v.jpg" contain max-height="50vh" />
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import datePad from "@/components/charts/datePad";

export default {
  components: { datePad },
};
</script>
