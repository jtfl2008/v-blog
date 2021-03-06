const mongoose = require('mongoose')
const Tag = mongoose.model('Tag')
const Article = mongoose.model('Article')

module.exports = {
    find:function (id) {
        // 可能要添加评论功能
        return Tag.findById(id)
    },

// 需要验证，带分页
// 能不能不要每次都写两种方法，把验证拦截统一？？
// page:第几页， limit：一页几个
    getList: function (page, limit) {

        if (page && limit) {
            const skip = (page - 1) * limit
            // MongoDB 的 _id 生成算法中已经包含了当前的时间，推荐的按时间排序的写法。
            // modal.find({_id: {$lt: id}}, callback).limit(12)
            return Promise.all([
                Tag.fetch()
                    .skip(skip)
                    .limit(limit)
                    .exec(),
                Tag.count().exec()
                ])
        } else {
            return Tag.fetch()
                      .exec()
        }
    },

    create:function (tag) {
      // tags也要保留关联的article
        _tag = new Tag(tag)
        //console.log('controller  '+ tag)
        return _tag.save()
    },

    update:function (id, data) {
        return Tag.update({_id: id}, {$set: data}).exec()
    },
    // 可以批量删除，传入数组
     remove:function (ids) {
        return Tag.remove({_id: {$in: ids}}).exec()
    }

}
