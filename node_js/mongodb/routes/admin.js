const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Category')
const Category = mongoose.model('categories')
require('../models/Post')
const Post = mongoose.model('posts')

router.get('/', (req,res) => {
    res.render('admin/index')
})

router.get('/categories', (req,res) => {
    Category.find().sort({date: 'desc'}).lean().then((categories) =>{
        res.render('admin/categories', {categories: categories})
    }).catch((err) => {
        req.flash('error_msg', `there was an error listing the categories: ${err}`)   
        res.redirect('/admin')
    })
})

router.get('/categories/add', (req,res) => {
    res.render('admin/addcategories')
})

router.post('/categories/new', (req, res) => {

    var errors = []

    if(!req.body.name || typeof req.body.name == undefined || req.body.name == null){
        errors.push({text: 'invalid name'})
    }
    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        errors.push({text: 'invalid slug'})
    }

    if(req.body.name.length < 2){
        errors.push({text: `small category's name`})
    }

    if(errors.length > 0){
        res.render('admin/addcategories', {errors: errors})
    }else{
        const NewCategory = {
            name: req.body.name,
            slug: req.body.slug
        }
        new Category(NewCategory).save().then(()=>{
            req.flash('success_msg', 'Category created successfully')
            res.redirect('/admin/categories')
        }).catch((err)=>{
            req.flash('error_msg', 'error saving category')
            res.redirect('/admin/categories')
        })
    }
})

router.get('/categories/edit/:id', (req, res) => {
    Category.findOne({_id: req.params.id}).lean().then((category) =>{
        res.render('admin/editcategories', {name: category.name, slug: category.slug, _id: category._id})
    }).catch((err) => {
        req.flash('error_msg', `there was an error searching the category: ${err}`)   
        res.redirect('/admin/categories')
    })
})

router.post('/categories/edit/:id', (req, res) => {
    Category.findOneAndUpdate({_id: req.params.id}, {name: req.body.name, slug: req.body.slug}).then(()=>{
        req.flash('success_msg', 'Category updated successfully')
        res.redirect('/admin/categories')
    }).catch((err)=>{
        req.flash('error_msg', 'error updating category')
        res.redirect('/admin/categories')
    })
})

router.post('/categories/delete', (req, res) => {
    Category.findOneAndDelete({_id: req.body.id}).then(()=>{
        req.flash('success_msg', 'Category deleted successfully')
        res.redirect('/admin/categories')
    }).catch((err)=>{
        req.flash('error_msg', 'error deleting category')
        res.redirect('/admin/categories')
    })
})

router.get('/posts', (req, res) => {
    Post.find().lean().populate({path: 'category', strictPopulate: false}).sort({date: 'desc'}).then((posts)=>{
        res.render('admin/posts', {posts: posts})
    }).catch((err)=>{
        console.log(err)
        req.flash('error_msg', 'Ops..:'+err)
        res.redirect('admin/posts')
    })
})

router.get('/posts/add', (req,res)=> {
    Category.find().lean().then((categories) =>{
        res.render('admin/addposts', {categories:categories})
    }).catch((err) => {
        req.flash('error_msg', 'Ops..:')
        res.redirect('/admin/posts')
    })
})

router.post('/posts/new', (req, res) => {
    var errors = []

    if(req.body.category == '0'){
        errors.push({text: 'invalid category'})
    }

    if(errors.length > 0){
        res.render('admin/addposts', {errors: errors})
    }else{
        const newPost = {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            slug: req.body.slug,
            category: req.body.category
        }

        new Post(newPost).save().then(()=>{
            req.flash('success_msg', 'Post created successfully')
            res.redirect('/admin/posts')
        }).catch((err)=>{
            req.flash('error_msg', `error saving post: ${err}`)
            res.redirect('/admin/posts')
        })
    }
})

router.get('/posts/edit/:id', (req,res) =>{
    Post.findOne({_id: req.params.id}).lean().then((post) =>{

        Category.find().lean().then((categories) =>{
            res.render('admin/editposts',
            {
                categories:categories, 

                _id:post._id,
                title:post.title, 
                slug:post.slug, 
                description:post.description, 
                content:post.content, 
                category:post.category
            })
        }).catch((err)=>{
            req.flash('error_msg', 'error: '+err)
            res.redirect(`/admin/posts`)
        })
    }).catch((err)=>{
        req.flash('error_msg', 'error: '+err)
        res.redirect(`/admin/posts`)
    })
})

router.post('/posts/edit', (req, res)=>{

    Post.findOneAndUpdate({_id: req.body.id},
        {
            title:req.body.title,
            slug:req.body.slug,
            description:req.body.description,
            content:req.body.content,
            category:req.body.category
        }).then(() =>{
            req.flash('success_msg', 'Success')
            res.redirect('/admin/posts')
    }).catch((err)=>{
        req.flash('error_msg', 'Error: ' +err)
        res.redirect('/admin/posts')
    })
})

router.get('/posts/delete/:id', (req,res)=>{
    Post.deleteOne({_id:req.params.id}).lean().then(()=>{
        req.flash('success_msg', 'Success deleting post!')
        res.redirect('/admin/posts')
    }).catch((err)=>{
        req.flash('error_msg', 'Internal error: '+err)
        res.redirect('/admin/posts')
    })
})

module.exports = router