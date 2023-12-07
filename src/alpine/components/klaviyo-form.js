export const klaviyoForm = (list_id) => ({
  submit: false,
  listId: list_id,
  async sendKlaviyo(listId) {
    try {
      const url = `https://manage.kmail-lists.com/ajax/subscriptions/subscribe`;
      const profiles = new URLSearchParams();

      profiles.append(
        "email",
        this.$root.querySelector('[name="email"]').value
      );
      profiles.append("$fields", "$source");
      profiles.append("g", listId);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Cache-Control": "no-cache",
        },
        body: profiles,
      });

      this.submit = true;

      return await res.json();
    } catch (e) {
      console.log(e);
    }
  },
});
