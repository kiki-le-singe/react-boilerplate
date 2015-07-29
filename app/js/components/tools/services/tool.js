import request from 'superagent';
import api from '../config/api.json';

class Tool {

    static fetch() {
      return new Promise((resolve, reject) => {
        request
           .get(api.tools)
           .end((err, res) => {
             if (res.ok) {
               resolve(res.body);
             }
             else {
               console.error(api.tools, res.text); // eslint-disable-line
               reject(res.text);
             }
           });
      });
    }

    static create(tool) {
      request
         .post(api.tools)
         .type('form')
         .send(tool)
         .end((err, res) => {
           if (res.ok) {
             this.setState({data: res.body});
           }
           else {
             console.error(api.tools, res.text); // eslint-disable-line
           }
         });
    }

    static delete(id) {
      request
        .del(api.tools + '/' + id)
        .end((err, res) => {
          if (res.ok) {
            this.setState({data: res.body});
          }
          else {
            console.error(api.tools, res.text); // eslint-disable-line
          }
        });
    }
}

export default Tool;
