import { Component } from "@angular/core";

@Component({
    selector: "top4eu-feedback-panel",
    templateUrl: "./feedback-panel.component.html",
    styleUrls: ["./feedback-panel.component.scss"],
})
export class FeedbackPanelComponent {
    public rating = 0; // Текущий рейтинг пользователя

    /**
     * Устанавливает рейтинг, выбранный пользователем.
     * @param star - значение выбранной звезды (1-5)
     */
    setRating(star: number): void {
        this.rating = star;
        console.log(`Рейтинг установлен: ${this.rating}`);
        // Здесь можно добавить логику для отправки рейтинга на сервер
        this.sendFeedbackToServer(this.rating);
    }

    /**
     * Отправляет рейтинг на сервер.
     * @param rating - значение рейтинга
     */
    private sendFeedbackToServer(rating: number): void {
        // Пример отправки данных на сервер
        console.log(`Отправка рейтинга на сервер: ${rating}`);
        // Реализуйте HTTP-запрос для отправки рейтинга
    }
}
